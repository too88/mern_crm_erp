import { Layout } from "antd";
import Navigation from "@/apps/Navigation/index";
import HeaderContent from "./Header";
import AppRouter from "@/router/AppRouter";
import { useAppContext } from "@/context/appContext";

const { Content } = Layout;

export default function ErpApp() {
  const { state: stateApp } = useAppContext();
  const { isNavMenuClose } = stateApp;

  return (
    <Layout hasSider>
      <Navigation />

      <Layout style={{ marginLeft: isNavMenuClose ? 100 : 220 }}>
        <HeaderContent />

        <Content
          style={{
            margin: "40px auto 30px",
            overflow: "initial",
            width: "100%",
            padding: "0 25px",
            maxWidth: isNavMenuClose ? 1200 : 1100,
          }}
        >
          <AppRouter />
        </Content>
      </Layout>
    </Layout>
  );
}
