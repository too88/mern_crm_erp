import * as reduxConstants from "@/constants/common";

const INITIAL_STATE = {
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
};

const crudReducer = (state = INITIAL_STATE, action) => {
  const { payload, keyState } = action;

  switch (action.type) {
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

    default:
      return state;
  }
};

export default crudReducer;
