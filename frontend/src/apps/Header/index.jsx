import SelectLanguage from "@/components/SelectLanguage";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";

//TODO: complete header bar
export default function HeaderContent() {
  //TODO: update auth middleware then finish profile information
  const ProfileDropdown = () => {
    return (
      <div className="profileDropdown">
        <Avatar
          size="large"
          className="last"
          style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          Too
        </Avatar>
        <div className="profileDropdownInfo">
          <p>Too Huynh</p>
          <p>tuhuynh1902@gmail.com</p>
        </div>
      </div>
    );
  };

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
          <span>Profile</span>
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
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        stye={{ width: "280px", float: "right" }}
      >
        {/* TODO: build photo profile after that update avatar's src */}
        <Avatar
          className="last"
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            float: "right",
            cursor: "pointer",
          }}
          size="large"
        >Too</Avatar>
      </Dropdown>

      <SelectLanguage />
    </Layout.Header>
  );
}
