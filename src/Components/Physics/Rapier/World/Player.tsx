import {
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

import { PLAYER } from "Components/Physics/Player.config";
import { Vector3 } from "three";

const ORIGIN_VECTOR = new Vector3();
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

const velocityVector = new Vector3();

const PhysicsRapierWorldPlayer = () => {
  // Keyboard Controls.
  const jumpOn = useKeyboardControls((state) => state.jump);
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);
  const runOn = useKeyboardControls((state) => state.run);

  // References.
  const playerRef = useRef<any>(null!);
  const pointerRef = useRef<any>(null!);
  const shadowRef = useRef<any>(null!);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;
    const shadow = shadowRef.current;

    // Get Player velocity.
    const playerVelocity = player.linvel(); // Get linear velocity.

    // Move Player
    const lateralDirectionModifier = //
      moveRightOn
        ? PLAYER.DIRECTION.RIGHT
        : moveLeftOn
        ? PLAYER.DIRECTION.LEFT
        : PLAYER.DIRECTION.NONE;
    const lateralVelocityModifier = PLAYER.VELOCITY.LATERAL;
    const longitudinalDirectionModifier = //
      moveForwardOn
        ? PLAYER.DIRECTION.FORWARD
        : moveBackwardOn
        ? PLAYER.DIRECTION.BACKWARD
        : PLAYER.DIRECTION.NONE;
    const longitudinalVelocityModifier = //
      moveForwardOn
        ? PLAYER.VELOCITY.FORWARD
        : moveBackwardOn
        ? PLAYER.VELOCITY.DEFAULT
        : PLAYER.VELOCITY.DEFAULT;
    const normalDirectionModifier = //
      jumpOn //
        ? PLAYER.DIRECTION.UP
        : PLAYER.DIRECTION.DOWN;
    const normalVelocityModifier = PLAYER.VELOCITY.NORMAL;
    const runModifier = //
      runOn //
        ? PLAYER.VELOCITY.RUN
        : PLAYER.VELOCITY.DEFAULT;
    velocityVector.set(
      lateralDirectionModifier * lateralVelocityModifier * runModifier,
      normalDirectionModifier * normalVelocityModifier * runModifier, // Camera quaternion should not affect velocity on gravity/normal axis.
      longitudinalDirectionModifier * longitudinalVelocityModifier * runModifier
    );

    // Match velocityVector direction to Camera direction.
    velocityVector.applyQuaternion(camera.quaternion);
    velocityVector.y = playerVelocity.y; // Add velocity on gravity axis back after applying camera quaternion.

    // Reset angular velocity of Player if no movement detected.
    if (!moveBackwardOn && !moveForwardOn && !moveLeftOn && !moveRightOn) {
      player.setAngvel(ORIGIN_VECTOR);
    }

    // Apply linear velocity to Player.
    player.setLinvel(velocityVector);

    const playerPosition = player.translation();

    // Match Camera position to Player position.
    camera.position.copy(playerPosition);
    camera.position.y += PLAYER.HEIGHT - PLAYER.SIZE;

    // Match Shadow position to Player position.
    shadow.position.copy(playerPosition);
    shadow.position.y = SAFE_OFFSET;
  });

  return (
    <group name="Player">
      <PointerLockControls ref={pointerRef} />
      <RigidBody //
        canSleep={false}
        colliders="ball"
        position={PLAYER.POSITION}
        ref={playerRef}
        type="dynamic"
      >
        <Sphere args={[0.5, 8, 8]}>
          <meshBasicMaterial //
            color={0x00ff00}
            wireframe={false}
          />
        </Sphere>
      </RigidBody>
      <Shadow //
        color="black"
        ref={shadowRef}
      />
    </group>
  );
};

export { PhysicsRapierWorldPlayer as Player };
