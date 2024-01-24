import * as crudConstant from "@/constants/common";

export const initialState = {
  isModalOpen: false,
  isPanelClose: true,
  isBoxCollapsed: false,
  isReadBoxOpen: false,
  isAdvancedBoxOpen: false,
  isEditBoxOpen: false,
};

export function contextReducer(state, action) {
  switch (action.type) {
    // panel
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

    // box
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

    // readBox
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
    case crudConstant.COLLAPSE_READ_BOX:
      return {
        ...state,
        isReadBoxOpen: !state.isReadBoxOpen,
      };

    // editBox
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

    // modal
    case crudConstant.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case crudConstant.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    default:
      throw new Error(`un handle action type: ${action.type}`);
  }
}
