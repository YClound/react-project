import { combineReducers } from "redux";
import { selectKeyModel } from "@/typings";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import count from "./test";
import user from "./user";
import global from "./global";

export interface RooteStateModel {
  todos?: any;
  global: selectKeyModel;
  visibilityFilter?: any;
  count: number;
  user: any;
}

const reducerRedux = combineReducers<RooteStateModel>({
  todos,
  visibilityFilter,
  count,
  user,
  global,
});

export default reducerRedux;
