import { useMemo, useState } from "react";

import styles from "Components/UserInterface/CursorOverlay.module.css";
import { ThreeEvent } from "@react-three/fiber";

enum CURSOR_EVENT_NAME {
  ACTIVE = "cursor-active",
  INACTIVE = "cursor-inactive",
}

const CURSOR = {
  ACTIVE: {
    NAME: CURSOR_EVENT_NAME.ACTIVE,
    EVENT: new CustomEvent(CURSOR_EVENT_NAME.ACTIVE),
  },
  INACTIVE: {
    NAME: CURSOR_EVENT_NAME.INACTIVE,
    EVENT: new CustomEvent(CURSOR_EVENT_NAME.INACTIVE),
  },
};

// Event Dispatchers.
const cursorActiveHandler = (event: ThreeEvent<MouseEvent>) => {
  event.stopPropagation();
  window.dispatchEvent(CURSOR.ACTIVE.EVENT);
};
const cursorInactiveHandler = (event: ThreeEvent<MouseEvent>) => {
  event.stopPropagation();
  window.dispatchEvent(CURSOR.INACTIVE.EVENT);
};

const UserInterfaceCursorOverlay = () => {
  // States.
  const [isActive, setIsActive] = useState(false);

  useMemo(() => {
    window.addEventListener(CURSOR.ACTIVE.NAME, () => {
      setIsActive(true);
    });
    window.addEventListener(CURSOR.INACTIVE.NAME, () => {
      setIsActive(false);
    });
  }, []);

  return (
    <div
      className={styles["cursor"]}
      style={{ backgroundColor: isActive ? "white" : "transparent" }}
    ></div>
  );
};

export {
  UserInterfaceCursorOverlay as CursorOverlay,
  cursorActiveHandler,
  cursorInactiveHandler,
};
