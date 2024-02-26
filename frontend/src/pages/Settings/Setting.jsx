import {
  CreditCardOutlined,
  DollarOutlined,
  SettingOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import TabsContent from "@/components/TabsContent/TabsContent";
import GeneralSettings from "./GeneralSetting";
import useLanguage from "@/locale/useLanguage";
import CompanySettings from "./CompanySetting";
import FinanceSettings from "./FinanceSetting";
import MoneyFormatSettings from "./MoneyFormatSetting";

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
    {
      key: "finance_settings",
      label: translate("finance_settings"),
      icon: <CreditCardOutlined />,
      children: <FinanceSettings />,
    },
    {
      key: "currency_settings",
      label: translate("currency_settings"),
      icon: <DollarOutlined />,
      children: <MoneyFormatSettings />,
    },
  ];

  const pageTitle = translate("settings");

  return <TabsContent content={content} pageTitle={pageTitle} />;
}
