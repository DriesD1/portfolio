import { Plane } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import { Euler, Vector3 } from "three";

import { TELEVISION } from "Components/Television/Television.config";
import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";

type TelevisionButtonProps = {
  clickHandler: any;
  color: string;
  colorHover: string;
} & GroupProps;

const height = TELEVISION.SIZE * TELEVISION.BUTTON.SIZE;
const width = TELEVISION.SIZE * TELEVISION.BUTTON.SIZE;

const TelevisionButton = ({
  clickHandler,
  color,
  colorHover = "#ff00ff",
  position = new Vector3(),
  rotation = new Euler(),
}: TelevisionButtonProps): React.JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const pointerOverHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    cursorActiveHandler(event);
    setIsHovered(true);
  };
  const pointerOutHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    cursorInactiveHandler(event);
    setIsHovered(false);
  };

  return (
    <group name="Television Button" position={position} rotation={rotation}>
      <Plane
        args={[width, height]}
        name="Loop Button"
        onClick={clickHandler}
        onPointerEnter={pointerOverHandler}
        onPointerLeave={pointerOutHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
      >
        <meshBasicMaterial color={isHovered ? colorHover : color} />
      </Plane>
    </group>
  );
};

export { TelevisionButton };
