import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faGlobe } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../common/stylesheets/App.css";

export default function Header() {
	return (
		<header className='header text-light text-center p-4'>
			<span className='me-5'>
				<FontAwesomeIcon icon={faGlobe} size='3x' />
			</span>
			<span className='display-3 fw-bold'>SpaceX Launches</span>
			<span className='ms-5'>
				<FontAwesomeIcon icon={faRocket} size='3x' />
			</span>
		</header>
	);
}
