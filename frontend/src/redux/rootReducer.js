import { combineReducers } from "redux";

import { reducer as crudReducer } from "./crudRedux";
import { reducer as translateReducer } from "./translate";
import { reducer as settingReducer } from "./setting";
import { reducer as authReducer } from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
  translate: translateReducer,
  setting: settingReducer,
});

export default rootReducer;
