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
  resetAction:
    ({ actionType }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.RESET_ACTION,
        keyState: actionType,
        payload: null,
      });
    },
  currentItem:
    ({ data }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.CURRENT_ITEM,
        payload: { ...data },
      });
    },
  currentAction:
    ({ actionType, data }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.CURRENT_ACTION,
        keyState: actionType,
        payload: { ...data },
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
          type: reduxConstants.REQUEST_FAILED,
          keyState: "list",
          payload: [],
        });
      }
    },
  create:
    ({ entity, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.REQUEST_LOADING,
        keyState: "create",
        payload: null,
      });
      let data = null;

      data = await request.create({ entity, jsonData });

      if (data.success) {
        dispatch({
          type: reduxConstants.REQUEST_SUCCESS,
          keyState: "create",
          payload: data.result,
        });

        dispatch({
          type: reduxConstants.CURRENT_ITEM,
          payload: data.result,
        });
      } else {
        dispatch({
          type: reduxConstants.REQUEST_FAILED,
          keyState: "create",
          payload: [],
        });
      }
    },
  update:
    ({ entity, id, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.REQUEST_LOADING,
        keyState: "update",
        payload: null,
      });
      let data = null;

      data = await request.update({ entity, id, jsonData });

      if (data.success) {
        dispatch({
          type: reduxConstants.REQUEST_SUCCESS,
          keyState: "update",
          payload: data.result,
        });

        dispatch({
          type: reduxConstants.CURRENT_ITEM,
          payload: data.result,
        });
      } else {
        dispatch({
          type: reduxConstants.REQUEST_FAILED,
          keyState: "update",
          payload: [],
        });
      }
    },
  delete:
    ({ entity, id }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.REQUEST_LOADING,
        keyState: "delete",
        payload: null,
      });

      let data = await request.delete({ entity, id });

      if (data.success) {
        dispatch({
          type: reduxConstants.REQUEST_SUCCESS,
          keyState: "delete",
          payload: data.result,
        });

        dispatch({
          type: reduxConstants.RESET_ACTION,
          keyState: "delete",
        });
      } else {
        dispatch({
          type: reduxConstants.REQUEST_FAILED,
          keyState: "delete",
          payload: [],
        });
      }
    },
  search:
    ({ entity, options = {} }) =>
    async (dispatch) => {
      dispatch({
        type: reduxConstants.REQUEST_LOADING,
        keyState: "search",
        payload: null,
      });

      let data = await request.search({ entity, options });

      if (data.success) {
        dispatch({
          type: reduxConstants.REQUEST_SUCCESS,
          keyState: "search",
          payload: data.result,
        });
      } else {
        dispatch({
          type: reduxConstants.REQUEST_FAILED,
          keyState: "search",
          payload: [],
        });
      }
    },
};
