import { createSelector } from "reselect";

export const selectSetting = (state) => state.setting;

export const selectCurrentSetting = createSelector([selectSetting], (setting) => setting.result);

export const selectMoneyFormat = createSelector(
  [selectCurrentSetting],
  (setting) => setting.money_format_setting
);

export const selectAppSetting = createSelector(
  [selectCurrentSetting],
  (setting) => setting.app_settings
);
