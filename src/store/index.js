import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const reducer = (state = { name: "zzh" }, action) => {
  return state;
};

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export default getStore;
