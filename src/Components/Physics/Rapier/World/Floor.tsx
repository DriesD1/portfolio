import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PhysicsRapierWorldFloor = () => {
  return (
    <group name="Floor">
      <RigidBody>
        <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} />
      </RigidBody>
    </group>
  );
};

export { PhysicsRapierWorldFloor as Floor };
