import React from "react";
import locationError from "../../assets/animations/locationError.png";

const LocationNotFound = () => {
  return (
    <div id="location-error-message">
      <p>
        <img src={locationError} alt="location error" />
        We are unable to locate your address, please try again using city, state
        or pincode in the search box.
      </p>
    </div>
  );
};

export default LocationNotFound;
