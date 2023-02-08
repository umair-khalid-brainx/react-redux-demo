import { configureStore } from "@reduxjs/toolkit";
import LaunchSlice from "../features/launches/LaunchesSlice";

const store = configureStore({
	reducer: {
		launches: LaunchSlice.reducer,
	},
});

export default store;
