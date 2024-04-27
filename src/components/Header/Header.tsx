import { useContext } from "react";
import "./Header.scss";
import logo from "../../assets/animations/logo.gif";
import { WeatherContext } from "../../context/weatherContext";

const Header = () => {
  const { getWeatherData, getCurrentLocationWeather, city, setCity } =
    useContext<any | null>(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherData("city");
  };

  return (
    <div className="header">
      <span className="logo">
        <h1> Weather </h1>
        <img className="logo-animation" src={logo} alt="animated-logo" />
        <h1>Buddy</h1>
      </span>
      <span>
        <button
          id="gps-button"
          onClick={getCurrentLocationWeather}
          title="Current Location"
        >
          <i className="fa-solid fa-location-crosshairs" />
        </button>
        <form className="search-form" onSubmit={handleSearch}>
          <div>
            <input
              type="text"
              placeholder="city, state or pincode"
              pattern="[A-Za-z0-9 ]+$"
              minLength={3}
              maxLength={60}
              onChange={(e) => setCity(e.target.value)}
              name="searchValue"
              value={city}
              required
            />
          </div>
          <div>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" title="Search"></i>
            </button>
          </div>
        </form>
      </span>
    </div>
  );
};

export default Header;
