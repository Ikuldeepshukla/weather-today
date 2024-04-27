import { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import "./Weather.scss";

const WeatherInfo = () => {
  const { data, getCurrentDateDayTime } = useContext(WeatherContext);
  const weatherData = data?.weather?.length > 0 && data?.weather[0];

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td id="location">
              <p>
                <span id="current-day-info"> {getCurrentDateDayTime()} </span>
              </p>
              <p>
                <span id="city-name">{data.name}</span>,{" "}
                <span id="country-name"> {data.sys?.country} </span>{" "}
                <i className="fa-solid fa-location-dot"></i>{" "}
              </p>
            </td>
            <td id="temperature">
              <div id="current-temp">
                <span>
                  <i
                    id="temp-icon"
                    className="fa-solid fa-temperature-quarter"
                  ></i>
                </span>
                <span id="temp">{data?.main?.temp + "°C"} </span>
              </div>
              <div id="temp-stats">
                <div>
                  <i
                    id="temp-icon-down"
                    className="fa-solid fa-temperature-arrow-down"
                  ></i>
                  {data.main?.temp_min + "°C"}
                </div>
                <div>
                  <i
                    id="temp-icon-up"
                    className="fa-solid fa-temperature-arrow-up"
                  ></i>
                  {data.main?.temp_max + "°C"}
                </div>
              </div>
            </td>
          </tr>
          {weatherData && (
            <tr>
              <td colSpan={2}>
                <p id="weather-data-description">
                  Feels like {data.main?.feels_like + "°C"},{" "}
                  {weatherData.description}{" "}
                </p>
              </td>
            </tr>
          )}

          <tr>
            <td>
              <p id="pressure">
                <b> Pressure </b> <span> {data.main?.pressure} mbar </span>{" "}
                <i className="fa-solid fa-gauge-high"></i>
              </p>
            </td>
            <td>
              <p id="humidity">
                <b> Humidity </b> <span> {data.main?.humidity}% </span>
                <i className="fa-solid fa-droplet"></i>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <p id="visibility">
                <b> Visibility </b> <span> {data.visibility / 1000} km </span>{" "}
                <i className="fa-solid fa-eye"></i>
              </p>
            </td>
            <td>
              <p id="wind-speed">
                <b> Wind Speed </b> <span> {data.wind?.speed} mph </span>{" "}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherInfo;
