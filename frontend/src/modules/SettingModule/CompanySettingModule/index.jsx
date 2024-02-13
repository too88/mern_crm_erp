import useLanguage from "@/locale/useLanguage";
import UpdateSettingModule from "../Components/UpdateSettingModule";
import SettingSection from "../Components/SettingSection";
import SettingForm from "./form/SettingForm";

export default function CompanySettingModule({ config }) {
  const translate = useLanguage();

  return (
    <UpdateSettingModule config={config}>
      <SettingSection
        title={translate("company_settings")}
        description={translate("update_your_company_information")}
      >
        <SettingForm />
      </SettingSection>
    </UpdateSettingModule>
  );
}
