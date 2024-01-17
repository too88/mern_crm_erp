import { useAppContext } from "@/context/appContext";
import { ShopOutlined, TagOutlined, TagsOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation () {
  return <Sidebar collapsible={false} />;
};

//TODO: complete Sidebar
function Sidebar({ collapsible }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

  const items = [
    {
      key: "people",
      icon: <UserOutlined />,
      label: <Link to={"/people"}>People</Link>,
    },
    {
      key: "company",
      icon: <ShopOutlined />,
      label: <Link to={"/company"}>Company</Link>,
    },
    {
      key: "product",
      icon: <TagOutlined />,
      label: <Link to={"/product"}>Product</Link>,
    },
    {
      key: "productcategory",
      icon: <TagsOutlined />,
      label: <Link to={"/category/product"}>Product Category</Link>,
    },
  ];

  const onCollapse = () => {
    navMenu.collapse();
  };

  useEffect(() => {
    if (location) {
      if (currentPath !== location.pathname) {
        if (location.pathname === "/") setCurrentPath("dashboard");
        else setCurrentPath(location.pathname.slice(1));
      }
    }
  }, [location, currentPath]);

  return (
    <Layout.Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        bottom: "20px",
      }}
      theme={"light"}
    >
      {/* TODO: Logo for sidebar, update later */}

      <Menu
        items={items}
        mode="inline"
        theme={"light"}
        selectedKeys={[currentPath]}
        style={{
          background: "none",
          border: "none",
        }}
      />
    </Layout.Sider>
  );
}
