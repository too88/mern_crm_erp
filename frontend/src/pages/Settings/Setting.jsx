import { SettingOutlined, TrophyOutlined } from "@ant-design/icons";
import TabsContent from "@/components/TabsContent/TabsContent";
import GeneralSettings from "./GeneralSetting";
import useLanguage from "@/locale/useLanguage";
import CompanySettings from "./CompanySetting";

export default function Settings() {
  const translate = useLanguage();
  const content = [
    {
      key: "general_settings",
      label: translate("general_settings"),
      icon: <SettingOutlined />,
      children: <GeneralSettings />,
    },
    {
      key: "company_settings",
      label: translate("company_settings"),
      icon: <TrophyOutlined />,
      children: <CompanySettings />,
    },
  ];

  const pageTitle = translate("settings");

  return <TabsContent content={content} pageTitle={pageTitle} />;
}
