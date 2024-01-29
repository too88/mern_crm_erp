import * as settingConstant from "@/constants/common";
import request from "@/services/request";

export const settingAction = {
  resetState: () => (dispatch) => {
    dispatch({
      type: settingConstant.SETTING_RESET_STATE,
    });
  },
};
