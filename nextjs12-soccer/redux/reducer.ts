import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import scheduleReducer from "./../src/components/schdule/service/schedule-slice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const schedulePersistConfig={
  key:"schedule",
  storage,
  whitelist:["scheduleState"],
};

const persistedScheduleReducer=persistReducer(schedulePersistConfig,scheduleReducer);

export const rootReducer = combineReducers({
  schedule:persistedScheduleReducer,
});
