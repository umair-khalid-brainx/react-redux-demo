import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import LaunchSlice from "./reducers/LaunchSlice";
import { fetchLaunchData } from "./actions/LaunchAction";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: LaunchSlice.reducer,
	middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(fetchLaunchData);
export default store;
