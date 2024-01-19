import * as reduxConstants from "@/constants/common";
import request from "@/services/request";

export const crud = {
  resetState:
    (props = {}) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.RESET_STATE,
      });
    },
  list:
    ({
      entity,
      options = {
        page: reduxConstants.PAGINATE_PAGE_DEFAULT,
        items: reduxConstants.PAGINATE_PAGESIZE,
      },
    }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.REQUEST_LOADING,
        keyState: "list",
        payload: null,
      });

      let data = await request.list({ entity, options });

      if (data.success) {
        const result = {
          items: data.result,
          pagination: {
            current: parseInt(data.pagination.page, 10),
            pageSize: options.items,
            total: parseInt(data.pagination.count, 10),
          },
        };

        dispatch({
          type: reduxConstants.REQUEST_SUCCESS,
          keyState: "list",
          payload: result,
        });
      } else {
        dispatch({
          type: reduxConstants.REQUEST_SUCCESS,
          keyState: "list",
          payload: [],
        });
      }
    },
};
