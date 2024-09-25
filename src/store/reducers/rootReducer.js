import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { persistReducer } from "redux-persist";
import { tabReducer } from "./tabReducer";
import { loadingReducer } from "./loadingReducer";
import { postReducer } from "./postReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const usersPersistConfig = {
  key: "user",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["userLogin", "isLoggedIn", "userDetail"],
};

const tabPersistConfig = {
  key: "tab",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["selectedTab"],
};

export const rootReducer = combineReducers({
  // all reducers will be put here
  // persisted reducers
  userReducer: persistReducer(usersPersistConfig, userReducer),
  tabReducer: persistReducer(tabPersistConfig, tabReducer),
  // not persisted reducers
  loadingReducer,
  postReducer,
});
