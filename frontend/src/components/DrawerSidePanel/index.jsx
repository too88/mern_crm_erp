import { useCrudContext } from "@/context/crudContext";
import { Drawer } from "antd";

//TODO: complete Drawer Side Panel
export default function DrawerSidePanel({ headerPanel }) {
  const { state, crudContextAction } = useCrudContext();
  const { isPanelClose } = state;
  const { panel } = crudContextAction;

  const collapsePanel = () => {
    panel.collapse();
  };

  return (
    <Drawer onClose={collapsePanel} open={!isPanelClose}>
      {headerPanel}
    </Drawer>
  );
}
