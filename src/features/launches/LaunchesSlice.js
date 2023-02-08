import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchLaunchData = (body) => async (dispatch) => {
	try {
		dispatch(fetchLaunchStart());
		const response = await axios.post("https://api.spacexdata.com/latest/launches/query", body);
		dispatch(fetchLaunchSuccess(response.data));
	} catch (error) {
		dispatch(fetchLaunchFailure(error.message));
	}
};

export default LaunchSlice;
