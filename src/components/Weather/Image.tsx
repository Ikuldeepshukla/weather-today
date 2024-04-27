import { useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";
import partlyCloudy from "../../assets/animations/partlyCloudy.png";
import overcastCloudy from "../../assets/animations/overcastCloudy.png";
import clearSky from "../../assets/animations/clearSky.png";
import fewClouds from "../../assets/animations/fewClouds.png";
import drizzle from "../../assets/animations/drizzle.png";
import heavyRain from "../../assets/animations/heavyRain.png";
import dust from "../../assets/animations/dust.png";

const Image = () => {
  const { data } = useContext(WeatherContext);
  const weatherData = data?.weather?.length > 0 && data?.weather[0];

  const getImageSource = () => {
    if (weatherData.main === "Clouds") {
      if (weatherData.description.toLowerCase() === "scattered clouds") {
        return overcastCloudy;
      }
      if (weatherData.description.toLowerCase() === "broken clouds") {
        return partlyCloudy;
      }
      if (weatherData.description.toLowerCase() === "overcast clouds") {
        return overcastCloudy;
      }
      if (weatherData.description.toLowerCase() === "few clouds") {
        return fewClouds;
      } else {
        return fewClouds;
      }
    }
    if (weatherData.main === "Clear") {
      if (
        weatherData.description.toLowerCase().includes("clear") &&
        weatherData.description.toLowerCase().includes("sky")
      ) {
        return clearSky;
      } else {
        return clearSky;
      }
    }
    if (weatherData.main === "Haze") {
      if (weatherData.description.toLowerCase().includes("haze")) {
        return clearSky;
      } else {
        return clearSky;
      }
    }
    if (weatherData.main === "Snow") {
      if (weatherData.description.toLowerCase().includes("light snow")) {
        return overcastCloudy;
      }
      return overcastCloudy;
    }
    if (weatherData.main === "Drizzle") {
      if (
        weatherData.description
          .toLowerCase()
          .includes("light intensity drizzle")
      ) {
        return drizzle;
      } else {
        return drizzle;
      }
    }
    if (weatherData.main === "Rain") {
      if (weatherData.description.toLowerCase().includes("very heavy rain")) {
        return heavyRain;
      }
      if (weatherData.description.toLowerCase().includes("moderate rain")) {
        return heavyRain;
      } else {
        return heavyRain;
      }
    }
    if (weatherData.main === "Thunderstorm") {
      if (
        weatherData.description
          .toLowerCase()
          .includes("thunderstorm with light rain")
      ) {
        return heavyRain;
      } else {
        return heavyRain;
      }
    }
    if (weatherData.main === "Dust") {
      if (weatherData.description.toLowerCase().includes("dust")) {
        return dust;
      } else {
        return dust;
      }
    }
    if (weatherData.main === "Mist") {
      if (weatherData.description.toLowerCase().includes("mist")) {
        return heavyRain;
      } else {
        return heavyRain;
      }
    }
  };

  return (
    <div id="weather-image">
      <img src={getImageSource()} alt="weather" />
    </div>
  );
};

export default Image;
