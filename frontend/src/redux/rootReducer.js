import { combineReducers } from "redux";

import { reducer as crudReducer } from "./crudRedux";
import { reducer as translateReducer } from "./translate";
import { reducer as settingReducer } from "./setting";

const rootReducer = combineReducers({
  crud: crudReducer,
  translate: translateReducer,
  setting: settingReducer,
});

export default rootReducer;
