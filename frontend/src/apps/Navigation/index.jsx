import { useAppContext } from "@/context/appContext";
import useLanguage from "@/locale/useLanguage";
import {
  SettingOutlined,
  ShopOutlined,
  TagOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  return <Sidebar collapsible={false} />;
}

//TODO: complete Sidebar
function Sidebar({ collapsible }) {
  let location = useLocation();
  const translate = useLanguage();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

  const items = [
    {
      key: "customer",
      icon: <UserOutlined />,
      label: <Link to={"/customer"}>{translate("customer")}</Link>,
    },
    {
      key: "people",
      icon: <UserOutlined />,
      label: <Link to={"/people"}>{translate("people")}</Link>,
    },
    {
      key: "company",
      icon: <ShopOutlined />,
      label: <Link to={"/company"}>{translate("company")}</Link>,
    },
    {
      key: "lead",
      icon: <ShopOutlined />,
      label: <Link to={"/lead"}>{translate("lead")}</Link>,
    },
    {
      key: "product",
      icon: <TagOutlined />,
      label: <Link to={"/product"}>{translate("product")}</Link>,
    },
    {
      key: "productcategory",
      icon: <TagsOutlined />,
      label: <Link to={"/category/product"}>{translate("product_category")}</Link>,
    },
    {
      key: "expense",
      icon: <TagsOutlined />,
      label: <Link to={"/expense"}>{translate("expense")}</Link>,
    },
    {
      key: "expenseCategory",
      icon: <TagsOutlined />,
      label: <Link to={"/category/expense"}>{translate("expense_category")}</Link>,
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: translate('settings'),
      children: [
        {
          key: "admin",
          label: <Link to={"/admin"}>{translate("admin")}</Link>,
        },
        {
          key: "generalSetting",
          label: <Link to={"/settings"}>{translate("general_settings")}</Link>,
        },
        {
          key: "paymentMode",
          label: <Link to={"/payment/mode"}>{translate("payment_mode")}</Link>,
        },
      ],
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
