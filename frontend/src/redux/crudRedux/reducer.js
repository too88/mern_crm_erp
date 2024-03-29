import * as reduxConstants from "@/constants/common";

const INITIAL_KEY_STATE = {
  result: null,
  current: null,
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = {
  current: {
    result: null,
  },
  list: {
    result: {
      items: [],
      pagination: {
        current: reduxConstants.PAGINATE_PAGE_DEFAULT,
        pageSize: reduxConstants.PAGINATE_PAGESIZE,
        total: reduxConstants.PAGINATE_TOTAL_DEFAULT,
      },
    },
    isLoading: false,
    isSuccess: false,
  },
  read: INITIAL_KEY_STATE,
  create: INITIAL_KEY_STATE,
  update: INITIAL_KEY_STATE,
  delete: INITIAL_KEY_STATE,
  search: { ...INITIAL_KEY_STATE, result: [] },
};

const crudReducer = (state = INITIAL_STATE, action) => {
  const { payload, keyState } = action;

  switch (action.type) {
    case reduxConstants.RESET_STATE:
      return INITIAL_STATE;
    case reduxConstants.CURRENT_ITEM:
      return {
        ...state,
        current: {
          result: payload,
        },
      };
    case reduxConstants.REQUEST_LOADING:
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          isLoading: true,
        },
      };
    case reduxConstants.REQUEST_SUCCESS:
      return {
        ...state,
        [keyState]: {
          result: payload,
          isLoading: false,
          isSuccess: true,
        },
      };
    case reduxConstants.REQUEST_FAILED:
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          isLoading: false,
          isSuccess: false,
        },
      };
    case reduxConstants.CURRENT_ACTION:
      return {
        ...state,
        [keyState]: {
          ...INITIAL_KEY_STATE,
          current: payload,
        },
      };
    case reduxConstants.RESET_ACTION:
      return {
        ...state,
        [keyState]: {
          ...INITIAL_STATE[keyState],
        },
      };
    default:
      return state;
  }
};

export default crudReducer;
