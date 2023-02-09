import { useState } from "react";
import Listing from "./Listing";
import Filters from "./Filters";
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
		setFilters({ ...filters, resetToken: true });
		setButtonGroup({ group1: 1, group2: 1, group3: 1 });
	};

	const updateReset = () => {
		setFilters({ searchToken: "", upcomingToken: "", statusToken: "", dateToken: "", resetToken: false });
		document.getElementById("searchBar").value = "";
	};

	return (
		<section>
			<Filters
				filters={filters}
				buttonGroup={buttonGroup}
				setButtonGroup={setButtonGroup}
				handleSearch={handleSearch}
				handleStatus={handleStatus}
				handleUpcoming={handleUpcoming}
				handleDate={handleDate}
				handleReset={handleReset}
			/>
			<Listing filters={filters} updateReset={updateReset} />
		</section>
	);
}
