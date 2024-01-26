import * as translateConstant from "@/constants/common";

async function fetchTranslation() {
  try {
    let translation = await import("@/locale/translation/translation");
    return translation.default;
  } catch (error) {
    console.error("something went wrong happen when fetch translation ", error);
  }
}

export const translateAction = {
  resetState: () => (dispatch) => {
    dispatch({
      type: translateConstant.TRANSLATE_RESET_STATE,
    });
  },
  translate: (value) => async (dispatch) => {
    dispatch({
      type: translateConstant.REQUEST_LOADING,
    });

    const translation = await fetchTranslation();
    let data = await translation[value];

    const LANG_STATE = {
      result: data,
      langCode: value,
      isLoading: false,
      isSuccess: false,
    };

    window.localStorage.setItem("translate", JSON.stringify(LANG_STATE));
    if (data) {
      dispatch({
        type: translateConstant.TRANSLATE_REQUEST_SUCCESS,
        payload: data,
        langCode: value,
      });
    } else {
      dispatch({
        type: translateConstant.TRANSLATE_REQUEST_FAILED,
      });
    }
  },
};
