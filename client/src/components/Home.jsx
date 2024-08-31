import React from "react"
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Post from "./Post";
import { useState,useEffect } from "react";
import axios from "axios";
const Home = () => {
  const[fest,setfest]=useState([]);
    useEffect(()=>{
     axios.get("http://localhost:3000/getall").then((res)=>{
      console.log(res);
      setfest(res.data.fests);
     })
    },[]);
  return (
    <div>
      <div className="background">
        <div className="text-white w-[40%] pt-[5%] pl-[3vw]">
          <h1 className="text-[50px] text-bold relative leading-[3.3rem] mb-16">Find All Upcoming College Fests & Music Nights </h1>
          <NavLink className="  rounded-lg text-white w-[50px] rounded-md" to={"/upcoming"}>
            <div className="flex flex-row items-center justify-between  pr-10  rounded-md bg-red-500 px-2 py-4 ">
              <h1 className=" pl-7 pr-2 text-xl text-bold">Upcoming Music Fests</h1>
              <FaArrowRight />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="  pl-2 mt-5 pt-5 bg-gray-300">
        <h1 className="text-4xl  text-center ">ALL FESTS & MUSIC NIGHTS</h1>
        <div className="mt-10">
            
            <div className="m-t-16 text-black flex flex-row flex-wrap gap-[1%] ">
              
              {
                fest.map((festdata) => {
                  return <Post data={festdata} className="" />
                })
              }
            
            </div>
          </div>
        </div>
    </div>
  )
};

export default Home;
