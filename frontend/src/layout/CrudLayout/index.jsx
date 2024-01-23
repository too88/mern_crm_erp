import { Layout } from "antd";
import DefaultLayout from "../DefaultLayout";
import DrawerSidePanel from "@/components/DrawerSidePanel";

//TODO: handle content box
const ContentBox = ({ children }) => {
  return (
    <Layout.Content
      className="whiteBox shadow layoutPadding"
      style={{
        margin: "30px auto",
        width: "100%",
        maxWidth: "100%",
        flex: "none",
      }}
    >
      {children}
    </Layout.Content>
  );
};

export default function CrudLayout({
  config,
  headerPanel,
  sidePanelBottomContent,
  sidePanelTopContent,
  children,
}) {
  return (
    <DefaultLayout>
      <DrawerSidePanel
        config={config}
        headerPanel={headerPanel}
        topContent={sidePanelTopContent}
        bottomContent={sidePanelBottomContent}
      />
      <ContentBox>{children}</ContentBox>
    </DefaultLayout>
  );
}
