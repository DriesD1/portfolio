import { GroupProps } from "@react-three/fiber";

import { World } from "Components/Physics/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonXrArLayout";

/**
 * Page for Rapier with XR: AR.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierXrArPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <World {...props} />
    </Layout>
  );
};

export { PhysicsRapierXrArPage };
