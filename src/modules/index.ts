import { combineReducers } from "redux";
import body from "./body";
const rootReducer = combineReducers({ body });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
