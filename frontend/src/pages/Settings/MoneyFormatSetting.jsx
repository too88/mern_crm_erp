import useLanguage from "@/locale/useLanguage";
import MoneyFormatSettingModule from "@/modules/SettingModule/MoneyFormatSettingModule";

const SETTING = "setting";

export default function MoneyFormatSettings() {
  const translate = useLanguage();
  const entity = SETTING;

  const labels = {
    PANEL_TITLE: translate("settings"),
    TABLE_NAME: translate("settings_list"),
    ADD_NEW_ENTITY: translate("add_new_settings"),
    ENTITY_NAME: translate("settings"),
    SETTING_TITLE: translate("money_format_settings"),
  };

  const configPage = {
    entity,
    settingCategory: "money_format_settings",
    ...labels,
  };

  return <MoneyFormatSettingModule config={configPage} />;
}
