import useLanguage from "@/locale/useLanguage";
import SettingSection from "@/modules/SettingModule/Components/SettingSection";
import UpdateSettingModule from "@/modules/SettingModule/Components/UpdateSettingModule";
import GeneralSettingForm from "./form/GeneralSettingForm";

export default function GeneralSettingModule({ config }) {
  const translate = useLanguage();

  return (
    <UpdateSettingModule config={config}>
      <SettingSection
        title={translate("company")}
        description={translate("update_your_company_information")}
      >
        <GeneralSettingForm />
      </SettingSection>
    </UpdateSettingModule>
  );
}
