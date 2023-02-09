import React from "react";

export default function LaunchesFilters(props) {
	return (
		<div className='d-flex align-items-center justify-content-start'>
			<div className='search-bar d-inline-flex align-items-center m-4'>
				<input type='text' name='search-input' placeholder='Search...' className='form-control shadow-none w-100' id='searchBar' onChange={props.handleSearch} />
			</div>

			<div className='btn-group m-4'>
				<button
					className={props.buttonGroup.group1 === 1 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group1: 1 });
						props.handleStatus(e);
					}}
					value=''>
					All
				</button>
				<button
					className={props.buttonGroup.group1 === 2 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group1: 2 });
						props.handleStatus(e);
					}}
					value={true}>
					Success
				</button>
				<button
					className={props.buttonGroup.group1 === 3 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group1: 3 });
						props.handleStatus(e);
					}}
					value={false}>
					Failure
				</button>
			</div>

			<div className='btn-group m-4'>
				<button
					className={props.buttonGroup.group2 === 1 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group2: 1 });
						props.handleUpcoming(e);
					}}
					value=''>
					All
				</button>
				<button
					className={props.buttonGroup.group2 === 2 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group2: 2 });
						props.handleUpcoming(e);
					}}
					value={true}>
					Upcoming
				</button>
				<button
					className={props.buttonGroup.group2 === 3 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group2: 3 });
						props.handleUpcoming(e);
					}}
					value={false}>
					Not Upcoming
				</button>
			</div>

			<div className='btn-group m-4'>
				<button
					className={props.buttonGroup.group3 === 1 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group3: 1 });
						props.handleDate(e);
					}}
					value=''>
					All
				</button>
				<button
					className={props.buttonGroup.group3 === 2 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group3: 2 });
						props.handleDate(e);
					}}
					value='week'>
					Last Week
				</button>
				<button
					className={props.buttonGroup.group3 === 3 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group3: 3 });
						props.handleDate(e);
					}}
					value='month'>
					Last Month
				</button>
				<button
					className={props.buttonGroup.group3 === 4 ? "btn btn-primary" : "btn btn-outline-primary"}
					onClick={(e) => {
						props.setButtonGroup({ ...props.buttonGroup, group3: 4 });
						props.handleDate(e);
					}}
					value='year'>
					Last Year
				</button>
			</div>

			<div className='btn-group m-4'>
				<button className='btn btn-danger' onClick={props.handleReset}>
					Reset
				</button>
			</div>
		</div>
	);
}
