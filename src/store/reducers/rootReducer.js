import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const usersPersistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["userLogin", "isLoggedIn"],
};

export const rootReducer = combineReducers({
    // all reducers will be put here
    // persisted reducers
    userReducer: persistReducer(usersPersistConfig, userReducer),

    // not persisted reducers
});