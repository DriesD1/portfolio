import { Plane } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useState } from "react";

import { Material as VideoMaterial } from "Components/Material/Video";
import { TELEVISION } from "Components/Television/Television.config";

import { TelevisionButton as Button } from "Components/Television/Button";

import videoByDanaNettles from "Components/Television/assets/Video_by_Dana_Nettles.mp4";

const height = TELEVISION.SIZE;
const width = TELEVISION.SIZE * TELEVISION.PANEL.ASPECT_RATIO;

const Television = (props: GroupProps): React.JSX.Element => {
  // States.
  const [isLoopToggled, setIsLoopToggled] = useState<boolean>(false);
  const [isPlayToggled, setIsPlayToggled] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  // Event Handlers.
  const loopClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsLoopToggled((state) => !state);
  };

  const playClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsPlayToggled((state) => !state);
  };

  const volumeDownClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setVolume((volume) => {
      const v = volume - 0.05;

      return 0 < v ? v : 0;
    });
  };
  const volumeUpClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setVolume((volume) => {
      const v = volume + 0.05;

      return v < 1 ? v : 1;
    });
  };
  return (
    <group name="Television" {...props}>
      <Plane //
        args={[width, height]}
        name="Panel"
      >
        <VideoMaterial //
          loop={isLoopToggled}
          play={isPlayToggled}
          src={videoByDanaNettles}
          volume={volume}
        />
      </Plane>
      <group
        name="Buttons"
        position={[width / 2 + TELEVISION.BUTTON.SIZE, 0, 0]}
      >
        <Button
          name="Play Button"
          color={isPlayToggled ? "#ff0000" : "#990000"}
          colorHover="#ff00ff"
          clickHandler={playClickHandler}
          position={[0, TELEVISION.BUTTON.SIZE * 2 * 0, 0]}
        />
        <Button
          name="Loop Button"
          color={isLoopToggled ? "#0000ff" : "#000099"}
          colorHover="#ff00ff"
          clickHandler={loopClickHandler}
          position={[0, -TELEVISION.BUTTON.SIZE * 2 * 1, 0]}
        />
        <Button
          name="Volume Up Button"
          color={isLoopToggled ? "#00ff00" : "#009900"}
          colorHover="#ffff00"
          clickHandler={volumeUpClickHandler}
          position={[0, -TELEVISION.BUTTON.SIZE * 2 * 2, 0]}
        />
        <Button
          name="Volume Down Button"
          color={isLoopToggled ? "#ff0000" : "#990000"}
          colorHover="#ffff00"
          clickHandler={volumeDownClickHandler}
          position={[0, -TELEVISION.BUTTON.SIZE * 2 * 3, 0]}
        />
      </group>
    </group>
  );
};

export { Television };
