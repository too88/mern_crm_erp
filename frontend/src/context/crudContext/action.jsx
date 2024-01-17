import * as crudConstant from "@/constants/common";

const contextAction = (dispatch) => {
  return {
    collapsedBox: {
      open: () => {
        dispatch({ type: crudConstant.OPEN_BOX });
      },
      close: () => {
        dispatch({ type: crudConstant.CLOSE_BOX });
      },
      collapse: () => {
        dispatch({ type: crudConstant.COLLAPSE_BOX });
      },
    },
    panel: {
      open: () => {
        dispatch({ type: crudConstant.OPEN_PANEL });
      },
      close: () => {
        dispatch({ type: crudConstant.CLOSE_PANEL });
      },
      collapse: () => {
        dispatch({ type: crudConstant.COLLAPSE_PANEL });
      },
    }
  };
};

export default contextAction;
