import useLanguage from "@/locale/useLanguage";

import FinanceSettingModule from "@/modules/SettingModule/FinanceSettingModule";

const SETTING = "setting";

export default function FinanceSettings() {
  const translate = useLanguage();

  const entity = SETTING;

  const labels = {
    PANEL_TITLE: translate("settings"),
    TABLE_NAME: translate("settings_list"),
    ADD_NEW_ENTITY: translate("add_new_settings"),
    ENTITY_NAME: translate("settings"),
    SETTING_TITLE: translate("finance_settings"),
  };

  const configPage = {
    entity,
    settingCategory: "finance_settings",
    ...labels,
  };
  
  return <FinanceSettingModule config={configPage} />;
}
