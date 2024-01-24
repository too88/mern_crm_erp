import * as crudConstant from "@/constants/common";

const contextAction = (dispatch) => {
  return {
    collapsedBox: {
      open: () => {
        console.log("OPEN_BOX");
        
        dispatch({ type: crudConstant.OPEN_BOX });
      },
      close: () => {
        console.log("CLOSE_BOX");
        
        dispatch({ type: crudConstant.CLOSE_BOX });
      },
      collapse: () => {
        console.log("COLLAPSE_BOX");
        
        dispatch({ type: crudConstant.COLLAPSE_BOX });
      },
    },
    panel: {
      open: () => {
        console.log("OPEN_PANEL");

        dispatch({ type: crudConstant.OPEN_PANEL });
      },
      close: () => {
        console.log("CLOSE_PANEL");

        dispatch({ type: crudConstant.CLOSE_PANEL });
      },
      collapse: () => {
        console.log("COLLAPSE_PANEL");

        dispatch({ type: crudConstant.COLLAPSE_PANEL });
      },
    },
    readBox: {
      open: () => {
        console.log("OPEN_READ_BOX");

        dispatch({ type: crudConstant.OPEN_READ_BOX });
      },
      close: () => {
        console.log("CLOSE_READ_BOX");

        dispatch({ type: crudConstant.CLOSE_READ_BOX });
      },
      collapse: () => {
        console.log("COLLAPSE_READ_BOX");

        dispatch({ type: crudConstant.COLLAPSE_READ_BOX });
      },
    },
    editBox: {
      open: () => {
        console.log("OPEN_EDIT_BOX");

        dispatch({ type: crudConstant.OPEN_EDIT_BOX });
      },
      close: () => {
        console.log("CLOSE_EDIT_BOX");

        dispatch({ type: crudConstant.CLOSE_EDIT_BOX });
      },
    },
  };
};

export default contextAction;
