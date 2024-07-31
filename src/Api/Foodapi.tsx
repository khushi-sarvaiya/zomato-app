import axios from "axios";
import React from "react";

const Foodapi = (params: any) => {
  const foodapi_data = axios.get("http://192.168.1.32:5500/restaurant", params);
  return foodapi_data;
};

export default Foodapi;


