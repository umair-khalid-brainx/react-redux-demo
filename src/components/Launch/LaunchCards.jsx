/* eslint-disable react-hooks/exhaustive-deps */
import "./Launches.css";
import { fetchLaunchData } from "../../features/Launches";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function LaunchCards(props) {
	const { data, loading, error } = useSelector((state) => state.launches);
	const dispatch = useDispatch();

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
		return <div className='m-3 h3 text-primary'>Loading...</div>;
	}

	if (error) {
		return <div className='m-3 h3 text-danger'>{error}</div>;
	}

	return (
		<section>
			<p className='h4 mx-4'>Displaying {data.docs?.length} records</p>
			<div className='card-container'>
				{data.docs?.map((item) => (
					<div key={item.id} className='card m-3'>
						<img className='card-img-top' src={require("../../assets/images/spacex.jpg")} alt='card-img' />
						<div className='card-body'>
							<h3 className='card-title fw-bold mb-3'>{item.name}</h3>
							<div className='card-text fw-bold my-2'>Flight Number: {item.flight_number}</div>
							<div className='card-text fw-bold my-2'>Launch Date: {new Date(item.date_utc).toLocaleDateString("en-UK")}</div>
							<div className='card-text fw-bold my-2'>
								Mission Status: {item.success ? <div className='green-dot mx-3'></div> : <div className='red-dot mx-3'></div>}
							</div>
							<div className='card-text fw-bold my-2'>
								Upcoming Status: {item.upcoming ? <div className='green-dot mx-3'></div> : <div className='red-dot mx-3'></div>}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
