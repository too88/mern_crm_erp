import { combineReducers } from "redux";

import { reducer as crudReducer } from "./crudRedux";
import { reducer as translateReducer } from "./translate";

const rootReducer = combineReducers({
  crud: crudReducer,
  translate: translateReducer,
});

export default rootReducer;
