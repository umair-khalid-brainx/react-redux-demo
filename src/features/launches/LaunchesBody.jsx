import { useState } from "react";
import LaunchCards from "./LaunchesCards";
import "../../common/stylesheets/App.css";

export default function LaunchComponent() {
	const [filters, setFilters] = useState({
		searchToken: "",
		statusToken: "",
		upcomingToken: "",
		dateToken: "",
		resetToken: false,
	});
	const [buttonGroup, setButtonGroup] = useState({
		group1: 1,
		group2: 1,
		group3: 1,
	});

	const handleSearch = (event) => {
		setFilters({ ...filters, searchToken: event.target.value });
	};

	const handleStatus = (event) => {
		setFilters({ ...filters, statusToken: event.target.value });
	};

	const handleUpcoming = (event) => {
		setFilters({ ...filters, upcomingToken: event.target.value });
	};

	const handleDate = (event) => {
		setFilters({ ...filters, dateToken: event.target.value });
	};

	const handleReset = () => {
		setButtonGroup({ group1: 1, group2: 1, group3: 1 });
		setFilters({ ...filters, resetToken: true });
	};

	const updateReset = () => {
		setFilters({ searchToken: "", upcomingToken: "", statusToken: "", dateToken: "", resetToken: false });
		document.getElementById("searchBar").value = "";
	};

	return (
		<section>
			<div className='d-flex align-items-center justify-content-start'>
				<div className='search-bar d-inline-flex align-items-center m-4'>
					<input type='text' name='search-input' placeholder='Search...' className='form-control shadow-none w-100' id='searchBar' onChange={handleSearch} />
				</div>

				<div className='btn-group m-4'>
					<button
						className={buttonGroup.group1 === 1 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group1: 1 });
							handleStatus(e);
						}}
						value=''>
						All
					</button>
					<button
						className={buttonGroup.group1 === 2 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group1: 2 });
							handleStatus(e);
						}}
						value={true}>
						Success
					</button>
					<button
						className={buttonGroup.group1 === 3 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group1: 3 });
							handleStatus(e);
						}}
						value={false}>
						Failure
					</button>
				</div>

				<div className='btn-group m-4'>
					<button
						className={buttonGroup.group2 === 1 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group2: 1 });
							handleUpcoming(e);
						}}
						value=''>
						All
					</button>
					<button
						className={buttonGroup.group2 === 2 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group2: 2 });
							handleUpcoming(e);
						}}
						value={true}>
						Upcoming
					</button>
					<button
						className={buttonGroup.group2 === 3 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group2: 3 });
							handleUpcoming(e);
						}}
						value={false}>
						Not Upcoming
					</button>
				</div>

				<div className='btn-group m-4'>
					<button
						className={buttonGroup.group3 === 1 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group3: 1 });
							handleDate(e);
						}}
						value=''>
						All
					</button>
					<button
						className={buttonGroup.group3 === 2 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group3: 2 });
							handleDate(e);
						}}
						value='week'>
						Last Week
					</button>
					<button
						className={buttonGroup.group3 === 3 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group3: 3 });
							handleDate(e);
						}}
						value='month'>
						Last Month
					</button>
					<button
						className={buttonGroup.group3 === 4 ? "btn btn-primary" : "btn btn-outline-primary"}
						onClick={(e) => {
							setButtonGroup({ ...buttonGroup, group3: 4 });
							handleDate(e);
						}}
						value='year'>
						Last Year
					</button>
				</div>

				<div className='btn-group m-4'>
					<button className='btn btn-danger' onClick={handleReset}>
						Reset
					</button>
				</div>
			</div>

			<LaunchCards filters={filters} updateReset={updateReset} />
		</section>
	);
}
