import { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import Image from "./Image";

const WeatherVisuals = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div>
      <div>
        <Image />
      </div>
      <div>
        <p id="lat-long">
          <b> Latitude </b>
          <span> {data.coord?.lat} </span>
          <b> Longitude </b>
          <span> {data.coord?.lon} </span>
          <span>
            <i className="fa-solid fa-map-location-dot"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherVisuals;
