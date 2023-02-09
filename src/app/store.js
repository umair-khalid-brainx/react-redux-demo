import { configureStore } from "@reduxjs/toolkit";
import LaunchSlice from "../features/Launches/Slice";

const store = configureStore({
	reducer: {
		launches: LaunchSlice.reducer,
	},
});

export default store;
