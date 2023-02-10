import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchLaunchStart, fetchLaunchSuccess, fetchLaunchFailure } from "../reducers/LaunchSlice";

export function* fetchLaunchData(body) {
	try {
		yield put(fetchLaunchStart());
		const response = yield call(axios.post, "https://api.spacexdata.com/latest/launches/query", body);
		yield put(fetchLaunchSuccess(response.data));
	} catch (error) {
		yield put(fetchLaunchFailure(error.message));
	}
}
