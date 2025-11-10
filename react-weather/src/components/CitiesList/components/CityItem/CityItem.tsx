import React from "react";
import type { CityModel } from "../../../../models/CityModel";
import "./styles.css";

import { useNavigate } from "react-router-dom";
import SvgFlagImage from "../../../SvgFlagImage";

export function CityItem({ city }: { city: CityModel }) {
	const navigator = useNavigate();

	const handleNavigationClick = (event: React.MouseEvent) => {
		navigator(
			`/list/${city.id}?lat=${city.latitude}&lon=${city.longitude}&cityName=${city.name}&countryCode=${city.country_code}`,
			{ replace: true }
		);
	};

	return (
		<div className="city-item w-full" onClick={handleNavigationClick}>
			<SvgFlagImage countryCode={city.country_code} className="shadow" />
			<span className="ml-2 city-name text-2xl font-bold">
				{city.name}
			</span>
			<span className="country-name text-2xl">{city.country}</span>
		</div>
	);
}
