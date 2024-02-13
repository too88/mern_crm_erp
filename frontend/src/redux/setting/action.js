import * as settingConstant from "@/constants/common";
import request from "@/services/request";

const dispatchSettingData = (data) => {
  const settingCategory = {};

  for (const item of data) {
    settingCategory[item.settingCategory] = {
      ...settingCategory[item.settingCategory],
      [item.settingKey]: item.settingValue,
    };
  }

  return settingCategory;
};

export const settingAction = {
  resetState: () => (dispatch) => {
    dispatch({
      type: settingConstant.SETTING_RESET_STATE,
    });
  },
  updateMany:
    ({ entity, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: settingConstant.SETTING_REQUEST_LOADING,
      });

      let data = await request.patch({
        entity: entity + "/updateManySetting",
        jsonData,
      });

      if (data.success) {
        dispatch({
          type: settingConstant.SETTING_REQUEST_LOADING,
        });

        let data = await request.listAll({ entity });

        if (data.success) {
          const payload = dispatchSettingData(data.result);
          window.localStorage.setItem("settings", JSON.stringify(dispatchSettingData(data.result)));
          dispatch({
            type: settingConstant.SETTING_REQUEST_SUCCESS,
            payload,
          });
        } else {
          dispatch({
            type: settingConstant.SETTING_REQUEST_FAILED,
          });
        }
      } else {
        dispatch({
          type: settingConstant.SETTING_REQUEST_FAILED,
        });
      }
    },
  list:
    ({ entity }) =>
    async (dispatch) => {
      dispatch({
        type: settingConstant.REQUEST_LOADING,
      });

      let data = await request.listAll({ entity });

      if (data.success) {
        const payload = dispatchSettingData(data.result);

        window.localStorage.setItem("settings", JSON.stringify(dispatchSettingData(data.result)));

        dispatch({
          type: settingConstant.SETTING_REQUEST_SUCCESS,
          payload,
        });
      } else {
        dispatch({
          type: settingConstant.SETTING_REQUEST_FAILED,
        });
      }
    },
};
