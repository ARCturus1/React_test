import React from "react";
import type { CityModel } from "../../../../models/CityModel";
import "./styles.css";

import { useNavigate } from "react-router-dom";
import SvgImage from "../../../SvgImage";

export default function CityItem({ city }: { city: CityModel }) {
	const navigator = useNavigate();

	const handleNavigationClick = (event: React.MouseEvent) => {
		navigator(
			`/city/${city.id}?lat=${city.latitude}&lon=${city.longitude}&cityName=${city.name}&countryCode=${city.country_code}`,
			{ replace: true }
		);
	};

	return (
		<div className="city-item" onClick={handleNavigationClick}>
			<SvgImage countryCode={city.country_code} />
			<span className="city-name text-2xl font-bold underline">
				{city.name}
			</span>
			<span className="country-name">{city.country}</span>
		</div>
	);
}
