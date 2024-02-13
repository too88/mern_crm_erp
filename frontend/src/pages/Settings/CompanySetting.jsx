import useLanguage from "@/locale/useLanguage";
import CompanySettingModule from "@/modules/SettingModule/CompanySettingModule";

const SETTING = 'setting'

export default function CompanySettings() {
  const translate = useLanguage();

  const entity = SETTING;

  const labels = {
    PANEL_TITLE: translate("settings"),
    TABLE_NAME: translate("settings_list"),
    ADD_NEW_ENTITY: translate("add_new_settings"),
    ENTITY_NAME: translate("settings"),
    SETTING_TITLE: translate("company_settings"),
  };

  const configPage = {
    entity,
    settingCategory: "company_settings",
    ...labels,
  };
  return <CompanySettingModule config={configPage} />;
}
