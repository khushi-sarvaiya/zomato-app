import React from "react";
import axios from "axios";

const Searchapi = (params:any) => {
  const respone= axios.post("http://192.168.1.22:5500/search", {params},
    {
      headers: {"content-Type": "application/json"},
    }
  );
  console.log("respone",respone);
  return respone
};

export default Searchapi;
