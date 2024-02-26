import useLanguage from "@/locale/useLanguage";
import SettingSection from "../Components/SettingSection";
import UpdateSettingModule from "../Components/UpdateSettingModule";
import MoneyFormSettingForm from "./form/SettingForm";

export default function FinanceSettingModule({ config }) {
  const translate = useLanguage();

  return (
    <UpdateSettingModule config={config}>
      <SettingSection
        title={translate("finance_settings")}
        description={translate("update_company_finance_settings")}
      >
        <MoneyFormSettingForm />
      </SettingSection>
    </UpdateSettingModule>
  );
}
