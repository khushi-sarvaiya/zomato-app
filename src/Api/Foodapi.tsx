import React from "react";
import axios from "axios";
import { restauranturl } from "./Commomapi";

const Foodapi = () => {
  const foodapi_data = axios.get(restauranturl);
  return foodapi_data;
};

export default Foodapi;
