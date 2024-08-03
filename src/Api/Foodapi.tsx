import axios from "axios";

const Foodapi = () => {
  const foodapi_data = axios.get("http://192.168.1.32:5500/restaurant");
  console.log("foodapi_data", foodapi_data);
  return foodapi_data;
};

export default Foodapi;
