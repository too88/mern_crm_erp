import * as translateActionConstant from "@/constants/common";
import storePersist from "../storePersist";
import vi_vn from '@/locale/translation/vi_vn';

const LANG_INITIAL_STATE = {
  result: vi_vn,
  langCode: "vi_vn",
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = storePersist.get("translate")
  ? storePersist.get("translate")
  : LANG_INITIAL_STATE;

const translateReducer = (state = INITIAL_STATE, action) => {
  const { payload = null, langCode } = action;

  switch (action.type) {
    case translateActionConstant.TRANSLATE_RESET_STATE:
      return INITIAL_STATE;
    case translateActionConstant.TRANSLATE_REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case translateActionConstant.TRANSLATE_REQUEST_SUCCESS:
      return {
        result: { ...state.result, ...payload },
        langCode: langCode.toLowerCase(),
        isLoading: false,
        isSuccess: true,
      };
    case translateActionConstant.TRANSLATE_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };

    default:
      return state;
  }
};

export default translateReducer;
