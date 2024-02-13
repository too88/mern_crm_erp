import { Layout } from "antd";
import Navigation from "@/apps/Navigation/index";
import HeaderContent from "./Header";
import AppRouter from "@/router/AppRouter";
import { useAppContext } from "@/context/appContext";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { settingAction } from "@/redux/setting/action";

export default function ErpApp() {
  const dispatch = useDispatch();
  const { state: stateApp } = useAppContext();
  const { isNavMenuClose } = stateApp;

  useLayoutEffect(() => {
    dispatch(settingAction.list({ entity: "setting" }));
  }, []);

  return (
    <Layout hasSider>
      <Navigation />

      <Layout style={{ marginLeft: isNavMenuClose ? 100 : 192, background: "#f9fafc" }}>
        <HeaderContent />

        <Layout.Content
          style={{
            margin: "40px auto 30px",
            overflow: "initial",
            width: "100%",
            padding: "0 25px",
            maxWidth: isNavMenuClose ? 1200 : 1100,
          }}
        >
          <AppRouter />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
