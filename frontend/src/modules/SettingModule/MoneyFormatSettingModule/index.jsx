import useLanguage from "@/locale/useLanguage";
import SettingForm from "./form/SettingForm";
import UpdateSettingModule from "../Components/UpdateSettingModule";
import SettingSection from "../Components/SettingSection";

export default function MoneyFormatSettingModule({ config }) {
  const translate = useLanguage();

  return (
    <UpdateSettingModule config={config}>
      <SettingSection
        title={translate("currency_format")}
        description={translate("update_currency_format")}
      >
        <SettingForm />
      </SettingSection>
    </UpdateSettingModule>
  );
}
