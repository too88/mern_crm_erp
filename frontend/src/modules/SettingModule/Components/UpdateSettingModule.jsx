import { PageHeader } from "@ant-design/pro-layout";
import { Divider } from "antd";
import UpdateSettingForm from "./UpdateSettingForm";

export default function UpdateSettingModule({ config, children }) {
  return (
    <>
      <PageHeader
        title={config.SETTING_TITLE}
        ghost={false}
        style={{
          padding: "20px 0px",
        }}
      ></PageHeader>

      <Divider></Divider>
      <UpdateSettingForm config={config}>{children}</UpdateSettingForm>
    </>
  );
}
