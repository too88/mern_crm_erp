import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";

//TODO: complete header bar
export default function HeaderContent() {
  const ProfileDropdown = () => {
    <div>
      <Avatar></Avatar>
    </div>;
  };

  const DropdownMenu = () => {};

  const items = [
    {
      label: <ProfileDropdown />,
      key: "ProfileDropdown",
    },
    {
      type: "divider",
    },
    {
      icon: <SettingOutlined />,
      key: "settingProfile",
      label: (
        <Link to={"/profile"}>
          <DropdownMenu />
        </Link>
      ),
    },
    {
      icon: <SettingOutlined />,
      key: "settingApp",
      label: <Link to={"/settings"}>App Setting</Link>,
    },
    {
      type: "divider",
    },
    {
      icon: <LogoutOutlined />,
      key: "logout",
      label: <Link to={"/logout"}>Logout</Link>,
    },
  ];

  return (
    <Layout.Header
      style={{
        padding: "20px",
        background: "#f9fafc",
        display: " flex",
        flexDirection: " row-reverse",
        justifyContent: " flex-start",
        gap: " 15px",
      }}
    >
      <Dropdown
        menu={items}
        trigger={["click"]}
        placement="bottomRight"
        stye={{ width: "280px", float: "right" }}
      >
        <Avatar></Avatar>
      </Dropdown>
    </Layout.Header>
  );
}
