import * as settingConstant from "@/constants/common";

const INITIAL_SETTING_STATE = {
  company_settings: {},
  app_settings: {},
  money_format_setting: {
    currency: "VND",
    currency_symbol: "đ",
    currency_position: "after",
    decimal_sep: ".",
    thousand_sep: ",",
    cent_precision: 0,
    zero_format: false,
  },
};

const INITIAL_STATE = {
  result: INITIAL_SETTING_STATE,
  isLoading: false,
  isSuccess: false,
};

const settingReducer = (state = INITIAL_STATE, action) => {
  const { payload = null } = action;

  switch (action.type) {
    case settingConstant.RESET_STATE:
      return INITIAL_STATE;
    case settingConstant.SETTING_REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case settingConstant.SETTING_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    case settingConstant.SETTING_REQUEST_SUCCESS:
      return {
        result: payload,
        isLoading: false,
        isSuccess: true,
      };

    default:
      return state;
  }
};

export default settingReducer;
