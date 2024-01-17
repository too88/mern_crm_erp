import * as crudConstant from "@/constants/common";

export const initialState = {
  isModelOpen: false,
  isPanelClose: true,
  isBoxCollapsed: false,
  isReadBoxOpen: false,
  isAdvancedBoxOpen: false,
  isEditBoxOpen: false,
};

export function contextReducer(state, action) {
  switch (action.type) {
    case crudConstant.OPEN_MODAL:
      return {
        ...state,
        isModelOpen: true,
      };
    case crudConstant.CLOSE_MODAL:
      return {
        ...state,
        isModelOpen: false,
      };
    case crudConstant.OPEN_PANEL:
      return {
        ...state,
        isPanelClose: false,
      };
    case crudConstant.CLOSE_PANEL:
      return {
        ...state,
        isPanelClose: true,
      };
    case crudConstant.COLLAPSE_PANEL:
      return {
        ...state,
        isPanelClose: !state.isPanelClose,
      };
    case crudConstant.OPEN_BOX:
      return {
        ...state,
        isBoxCollapsed: true,
      };
    case crudConstant.CLOSE_BOX:
      return {
        ...state,
        isBoxCollapsed: false,
      };
    case crudConstant.COLLAPSE_BOX:
      return {
        ...state,
        isBoxCollapsed: !state.isBoxCollapsed,
      };
    case crudConstant.OPEN_READ_BOX:
      return {
        ...state,
        isAdvancedBoxOpen: false,
        isEditBoxOpen: false,
        isReadBoxOpen: true,
      };
    case crudConstant.CLOSE_READ_BOX:
      return {
        ...state,
        isReadBoxOpen: false,
      };
    case crudConstant.OPEN_ADVANCED_BOX:
      return {
        ...state,
        isAdvancedBoxOpen: true,
        isEditBoxOpen: false,
        isReadBoxOpen: false,
      };
    case crudConstant.CLOSE_ADVANCED_BOX:
      return {
        ...state,
        isAdvancedBoxOpen: false,
      };
    case crudConstant.OPEN_EDIT_BOX:
      return {
        ...state,
        isAdvancedBoxOpen: false,
        isEditBoxOpen: true,
        isReadBoxOpen: false,
      };
    case crudConstant.CLOSE_EDIT_BOX:
      return {
        ...state,
        isEditBoxOpen: false,
      };
    case crudConstant.COLLAPSE_READ_BOX:
      return {
        ...state,
        isReadBoxOpen: !state.isReadBoxOpen,
      };

    default:
      throw new Error(`unhandle action type: ${action.type}`);
  }
}
