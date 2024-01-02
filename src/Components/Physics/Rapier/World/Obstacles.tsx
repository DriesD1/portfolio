import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Mesh, Vector3 } from "three";

import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";
import { ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const BOXES_COUNT = 1000;
const BOX_SIZE = 1;
const PLANE_SIZE = 100;

const obstacleList = new Array(BOXES_COUNT).fill(null).map(() => {
  const x = Math.random() * PLANE_SIZE - PLANE_SIZE / 2;
  const y = BOX_SIZE / 2;
  const z = Math.random() * PLANE_SIZE - PLANE_SIZE / 2;
  return new Vector3(x, y, z);
});

const Obstacle = () => {
  const color = 0xffffff * Math.random();

  // References.
  const boxRef = useRef<Mesh>(null!);

  // States.
  const [isClicked, setIsClicked] = useState(false);

  // Event Handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    console.log("click:", color);
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      boxRef.current.position.y += 1;
    }
  }, [isClicked]);

  return (
    <RigidBody canSleep={true} type="dynamic">
      <Box
        args={[1, 1, 1]}
        onClick={clickHandler}
        onPointerEnter={cursorActiveHandler}
        onPointerLeave={cursorInactiveHandler}
        onPointerOut={cursorInactiveHandler}
        onPointerOver={cursorActiveHandler}
        ref={boxRef}
      >
        <meshBasicMaterial color={color} />
      </Box>
    </RigidBody>
  );
};

const Obstacles = () => {
  return (
    <group name="Obstacles">
      {obstacleList.map((position, index) => (
        <group name="Obstacle" key={index} position={position}>
          <Obstacle />
        </group>
      ))}
    </group>
  );
};

export { Obstacles };
