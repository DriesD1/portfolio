import { GroupProps } from "@react-three/fiber";

import { World } from "Components/Physics/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonXrVrLayout";

/**
 * Page for Rapier with XR: VR.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierXrVrPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <World {...props} />
    </Layout>
  );
};

export { PhysicsRapierXrVrPage };
