import React, { useEffect } from "react"
import Post from "./Post";
import { useState } from "react";
import axios from "axios";
const Upcoming = () => {
    const[fest,setfest]=useState([]);
    useEffect(()=>{
     axios.get("http://localhost:3000/getall").then((res)=>{
      console.log(res);
      setfest(res.data.fests);
     })
    },[])

    console.log("fest",fest);
  return (
    <div>
      <p className="m-t-16 text-black flex flex-row flex-wrap gap-[1%] ">
       { 
            fest.map((festdata)=>{
            console.log(festdata)
            return <Post data={festdata} className=""/>
            })   
       }
      </p>

    </div>
  )
};
export default Upcoming;
