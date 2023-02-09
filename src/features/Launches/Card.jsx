import React from "react";

export default function LaunchesCard(props) {
	return (
		<div key={props.item.id} className='card m-3'>
			<img className='card-img-top' src={require("../../assets/images/spacex.jpg")} alt='card-img' />
			<div className='card-body'>
				<h3 className='card-title fw-bold mb-3'>{props.item.name}</h3>
				<div className='card-text fw-bold my-2'>Flight Number: {props.item.flight_number}</div>
				<div className='card-text fw-bold my-2'>Launch Date: {new Date(props.item.date_utc).toLocaleDateString("en-UK")}</div>
				<div className='card-text fw-bold my-2'>Mission Status: {props.item.success ? <div className='green-dot mx-3'></div> : <div className='red-dot mx-3'></div>}</div>
				<div className='card-text fw-bold my-2'>Upcoming Status: {props.item.upcoming ? <div className='green-dot mx-3'></div> : <div className='red-dot mx-3'></div>}</div>
			</div>
		</div>
	);
}
