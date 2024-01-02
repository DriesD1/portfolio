import { Floor } from "Components/Physics/Rapier/World/Floor";
import { Obstacles } from "Components/Physics/Rapier/World/Obstacles";
import { Player } from "Components/Physics/Rapier/World/Player";
import { Television } from "Components/Television";

const PhysicsRapierWorld = () => {
  return (
    <group name="Rapier World">
      <Floor />
      <Obstacles />
      <Player />
      <Television position={[0, 2, 0]} />∏
    </group>
  );
};

export { PhysicsRapierWorld as World };
