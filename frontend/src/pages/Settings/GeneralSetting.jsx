import useLanguage from "@/locale/useLanguage";

import GeneralSettingModule from "@/modules/SettingModule/GeneralSettingModule";

export default function GeneralSetting() {
  const translate = useLanguage();

  const entity = "setting";

  const labels = {
    PANEL_TITLE: translate("settings"),
    TABLE_NAME: translate("settings_list"),
    ADD_NEW_ENTITY: translate("add_new_settings"),
    ENTITY_NAME: translate("settings"),
    SETTING_TITLE: translate("general_setting"),
  };

  const configPage = {
    entity,
    settingCategory: "app_settings",
    ...labels,
  };
  return <GeneralSettingModule config={configPage} />;
}
