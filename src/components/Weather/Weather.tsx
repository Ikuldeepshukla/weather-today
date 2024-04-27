import { useContext } from "react";
import "./Weather.scss";
import WeatherVisuals from "./WeatherVisuals";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";
import { WeatherContext } from "../../context/weatherContext";
import LocationNotFound from "./LocationNotFound";

const Weather = () => {
  const { loading, locationError } = useContext(WeatherContext);

  return (
    <div className="weather-container">
      {loading ? (
        <Loading />
      ) : locationError ? (
        <LocationNotFound />
      ) : (
        <>
          <div className="weather-container-left">
            <WeatherVisuals />
          </div>
          <div className="weather-container-right">
            <WeatherInfo />
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
