import React from "react";
import axios from "axios";

const Searchapi = (search: any) => {
  console.log("params", search);
  return axios.post("http://192.168.1.32:5500/search", { search });
};

export default Searchapi;
