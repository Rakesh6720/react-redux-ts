// combine reducers into root reducer using combinReducers() from redux
// use root reducer function to create store

import { combineReducers, createStore } from "redux";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
