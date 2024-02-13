import { SettingOutlined } from "@ant-design/icons";
import TabsContent from "@/components/TabsContent/TabsContent";
import GeneralSettings from "./GeneralSetting";
import useLanguage from "@/locale/useLanguage";
import { useParams } from "react-router-dom";

export default function Settings() {
  const translate = useLanguage();
  const content = [
    {
      key: "general_settings",
      label: translate("General Settings"),
      icon: <SettingOutlined />,
      children: <GeneralSettings />,
    },
  ];

  const pageTitle = translate("Settings");

  return <TabsContent content={content} pageTitle={pageTitle} />;
}
