import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storePersist, { localStorageHealthCheck } from "./storePersist";
import lang from "@/locale/translation/vi_vn";

localStorageHealthCheck();

const LANG_INITIAL_STATE = {
  result: lang,
  langCode: "vi_vn",
  isLoading: false,
  isSuccess: false,
};

const lang_state = storePersist.get("translate")
  ? storePersist.get("translate")
  : LANG_INITIAL_STATE;

const AUTH_INITIAL_STATE = {
  current: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
};

const auth_state = storePersist.get('auth') ? storePersist.get('auth') : AUTH_INITIAL_STATE;

const initialState = { translate: lang_state, auth: auth_state };

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
