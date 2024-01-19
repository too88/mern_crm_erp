import { combineReducers } from "redux";

import { reducer as crudReducer } from "./crudRedux";

const rootReducer = combineReducers({
  crud: crudReducer,
});

export default rootReducer;
