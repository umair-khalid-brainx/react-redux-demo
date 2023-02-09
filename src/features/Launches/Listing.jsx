/* eslint-disable react-hooks/exhaustive-deps */
import { fetchLaunchData } from "./Slice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../../common/stylesheets/App.css";
import Card from "./Card";

export default function LaunchCards(props) {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state.launches);

	const body = {
		query: {},
		options: {
			pagination: false,
			sort: {
				flight_number: "asc",
			},
		},
	};

	useEffect(() => {
		if (props.filters.resetToken === true) {
			body.query = {};
			props.updateReset();
		}
		dispatch(fetchLaunchData(body));
	}, [dispatch, props.filters]);

	props.filters.searchToken !== "" ? Object.assign(body.query, { $text: { $search: props.filters.searchToken } }) : delete body.query.$text;
	props.filters.statusToken !== "" ? (body.query.success = props.filters.statusToken) : delete body.query.success;
	props.filters.upcomingToken !== "" ? (body.query.upcoming = props.filters.upcomingToken) : delete body.query.upcoming;

	const today = new Date();
	const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
	const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
	const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

	if (props.filters.dateToken === "week") {
		body.query.date_utc = { $gte: lastWeek.toISOString(), $lte: today.toISOString() };
	} else if (props.filters.dateToken === "month") {
		body.query.date_utc = { $gte: lastMonth.toISOString(), $lte: today.toISOString() };
	} else if (props.filters.dateToken === "year") {
		body.query.date_utc = { $gte: lastYear.toISOString(), $lte: today.toISOString() };
	} else {
		delete body.query.date_utc;
	}

	if (loading) {
		return <div className='m-3 h4 text-primary'>Loading...</div>;
	}

	if (error) {
		return <div className='m-3 h4 text-danger'>{error}</div>;
	}

	if (data.docs <= 0) {
		return <div className='m-3 h4 text-dark'>Nothing to display</div>;
	}

	return (
		<section>
			<p className='m-3 h4 text-dark'>Displaying {data.totalDocs} records</p>
			<div className='card-container'>
				{data.docs?.map((item) => (
					<Card item={item} />
				))}
			</div>
		</section>
	);
}
