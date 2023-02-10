import { createSlice } from "@reduxjs/toolkit";

const LaunchSlice = createSlice({
	name: "launches",
	initialState: {
		data: [],
		loading: false,
		error: null,
	},
	reducers: {
		fetchLaunchStart: (state) => {
			state.loading = true;
		},
		fetchLaunchSuccess: (state, action) => {
			state.data = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchLaunchFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchLaunchStart, fetchLaunchSuccess, fetchLaunchFailure } = LaunchSlice.actions;
export default LaunchSlice;
