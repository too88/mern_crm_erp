import * as navConstant from "@/constants/common";

const contextAction = (dispatch) => {
  return {
    navMenu: {
      open: () => {
        dispatch({ type: navConstant.OPEN_NAV_MENU });
      },
      close: () => {
        dispatch({ type: navConstant.CLOSE_NAV_MENU });
      },
      collapse: () => {
        dispatch({ type: navConstant.COLLAPSE_NAV_MENU });
      },
    },
  };
};

export default contextAction;
