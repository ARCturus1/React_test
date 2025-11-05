import { useLocation, useParams } from "react-router-dom";
import "./styles.css";
import { CityWether } from "../../components/CitiesList/components/CityWether";
import ErrorPage from "../ErrorPage";
import SvgFlagImage from "../../components/SvgImage/$ui";

export default function CityDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lat");
  const cityName = params.get("cityName") || undefined;
  const countryCode = params.get("countryCode") || undefined;

  // return !lat || !lon ? (
  //   <ErrorPage />
  // ) : (
  //   <>
  //     {cityName && <div className="font-bold m-3">{cityName}</div>}
  //     {countryCode && <SvgImage countryCode={countryCode} />}
  //     <CityWhether location={{ latitude: +lat, longitude: +lon }} />
  //   </>
  // );

  return !lat || !lon ? (
    <ErrorPage />
  ) : (
    // <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 flex items-center space-x-4 text-gray-900 dark:text-gray-100">
    //   <div className="text-5xl">☀️</div>
    //   <div>
    //     {countryCode && (
    //       <SvgImage
    //         countryCode={countryCode}
    //         className="text-3xl flex-shrink-0"
    //       />
    //     )}
    //     {cityName && <h2 className="text-xl font-semibold">{cityName}</h2>}
    //     <p className="text-3xl font-bold">+18°C</p>
    //     <p className="text-gray-600 dark:text-gray-300">Ясно</p>

    //     <div className="mt-2 flex items-center text-sm">
    //       <span className="mr-2">💨</span>
    //       <span>СЗ, 12 км/ч</span>
    //     </div>
    //   </div>

    // </div>
    <CityWether
      location={{ latitude: +lat, longitude: +lon }}
      countryCode={countryCode}
      cityName={cityName}
    />
  );
}
