import { NavigationItem } from "Types/NavigationItem";

export namespace NAVIGATION {
  export enum PATH {
    CLOCK = "clock",
    PHYSICS_RAPIER_WORLD = "rapier/world",
    PHYSICS_RAPIER_XR_AR = "rapier/world-xr-ar",
    PHYSICS_RAPIER_XR_VR = "rapier/world-xr-vr",
  }

  export const ITEMS: Array<NavigationItem> = [
    {
      label: "Clock",
      to: PATH.CLOCK,
    },

    {
      label: "Physics-Rapier World",
      to: PATH.PHYSICS_RAPIER_WORLD,
    },
    {
      label: "Physics-Rapier XR (AR)",
      to: PATH.PHYSICS_RAPIER_XR_AR,
    },
    {
      label: "Physics-Rapier XR (VR)",
      to: PATH.PHYSICS_RAPIER_XR_VR,
    },
  ];
}
