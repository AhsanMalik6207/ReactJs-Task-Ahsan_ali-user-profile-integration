import React, { useEffect, useState } from "react";
import axios from "axios";
import Userprofile from "../userprofile/userprofile";
// import "./posts.css";

export default function Userprofiles() {
  const [userprofiles, setUserprofiles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/userprofile/getAll").then((resp) => {
        setUserprofiles(resp.data);
    });
  }, []);
  return (
     
    userprofiles.map((userprofile) => (
      <Userprofile userprofile={userprofile} />
      ))
  );
}