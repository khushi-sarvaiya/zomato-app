import React from 'react'
import axios from "axios";
import { searchurl } from "./Commomapi";

const Searchapi = (search: any) => {
  return axios.post(searchurl, { search });
};

export default Searchapi;
