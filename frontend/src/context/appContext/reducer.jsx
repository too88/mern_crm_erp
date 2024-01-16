import * as navConstant from "@/constants/common";

export const initialState = {
  isNavMenuClose: false,
};

export function contextReducer(state, action) {
  switch (action.type) {
    case navConstant.OPEN_NAV_MENU:
      return {
        isNavMenuClose: false,
      };
    case navConstant.CLOSE_NAV_MENU:
      return {
        isNavMenuClose: true,
      };
    case navConstant.COLLAPSE_NAV_MENU:
      return {
        isNavMenuClose: !state.isNavMenuClose,
      };

    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
}
