import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Weather from "../../components/Weather/Weather";
import { WeatherContext } from "../../context/weatherContext";
import "./Home.scss";

const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [locationError, setLocationError] = useState(false);

  const { VITE_BASE_API_URL, VITE_OPEN_WEATHER_API_KEY } = import.meta.env;

  const getCurrentDateDayTime = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();
    const day = days[d.getDay()];
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const time = " " + day + " " + date + " " + month + " " + year + " " + hour;

    if (hour > 11) {
      if (minutes < 10) {
        return time + ":0" + minutes + " PM";
      }
      return time + ":" + minutes + " PM";
    } else {
      if (minutes < 10) {
        return time + ":0" + minutes + " AM";
      }
      return time + ":" + minutes + " AM";
    }
  };

  const getCurrentLocationWeather = () => {
    getWeatherData("location");
  };

  const getWeatherData = (searchBy: string) => {
    let baseURL: any = VITE_BASE_API_URL;
    setLoading(true);
    setLocationError(false);
    if (searchBy === "location") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            axios
              .get(
                `${baseURL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${VITE_OPEN_WEATHER_API_KEY}`
              )
              .then((res) => {
                setData(res.data);
                setCity("");
                setLoading(false);
              })
              .catch((err) => {
                setCity("");
                setLoading(false);
                setLocationError(true);
                console.log("Error:", err);
              });
          },
          function (error) {
            alert(error.code + ": " + error.message);
          },
          {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 5000,
          }
        );
      } else {
        alert("geolocation is not supported by this browser");
      }
    }

    if (searchBy === "city") {
      axios
        .get(
          `${baseURL}q=${city}&units=metric&appid=${VITE_OPEN_WEATHER_API_KEY}`
        )
        .then((res) => {
          setData(res.data);
          setCity("");
          setLoading(false);
        })
        .catch((err: any) => {
          setCity("");
          setLoading(false);
          setLocationError(true);
        });
    }
  };

  useEffect(() => {
    getWeatherData("location");
    console.log("REACT_APP_OPEN_WEATHER_API_KEY");
    return function cleanup() {};
  }, []);

  return (
    <div className="app-container">
      <WeatherContext.Provider
        value={{
          latitude,
          setLatitude,
          data,
          setData,
          longitude,
          setLongitude,
          city,
          setCity,
          getCurrentLocationWeather,
          getWeatherData,
          getCurrentDateDayTime,
          loading,
          setLoading,
          locationError,
          setLocationError,
        }}
      >
        <Header />
        <Weather />
        <Footer />
      </WeatherContext.Provider>
    </div>
  );
};

export default Home;
