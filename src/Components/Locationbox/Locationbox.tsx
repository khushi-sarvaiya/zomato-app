import React, { useEffect, useState } from "react";
import "../Locationbox/Locationbox.css";
import axios from "axios";

interface LocationboxProps {
  onLoadingTrue: (loadingValue: boolean) => void;
  currentData1: (locationData: string) => void;
}
const Locationbox: React.FC<LocationboxProps> = ({
  onLoadingTrue,
  currentData1,
}) => {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    currentData1(location);
  }, [location, currentData1]);

  const getIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  const getLocation = async (ip: any) => {
    try {
      const response = await axios.get(
        `https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`,
        {
          headers: {
            "x-rapidapi-key":
              "8538fa9f53msh9139b357151b270p12dfbcjsn0a88ff90f835",
            "x-rapidapi-host":
              "ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com",
          },
        }
      );
      setLocation(response.data.city);
      return response.data;
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const getCurrentLocation = async () => {
    const ip = await getIpAddress();
    if (ip) {
      getLocation(ip);
    }
  };

  const clickHandler = () => {
    const trueLoading = true;
    onLoadingTrue(trueLoading);
  };

  return (
    <div className="Location-component">
      <div className="current-location-icon">
        <i className="fa-solid fa-location-crosshairs"></i>
      </div>
      <div className="margin-left-div" onClick={clickHandler}>
        <div className="detect-current-location" onClick={getCurrentLocation}>
          Detect current location
        </div>
        <div className="gps-class-style">Using GPS</div>
      </div>
    </div>
  );
};

export default Locationbox;
