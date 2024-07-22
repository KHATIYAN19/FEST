import { useState,useEffect } from "react";
import axios from "axios";


const Details = () => {
    const[contactdata,setcontactdata]=useState([]);
    useEffect(()=>{
     axios.get("http://localhost:3000/find").then((res)=>{
      console.log(res);
      setcontactdata(res.data.details);
     })
    },[])
    return (
      <div>
         <p className="m-t-16 text-black flex flex-row flex-wrap gap-[1%] ">
          { 
            contactdata.map((data)=>{
            console.log(data);
            return (
                <>
                    <div className="  rounded-md w-full h-36 bg-slate-300 mb-10 pl-10 pt-6">
                         <h1>Name:{data.name}</h1>
                         <p>Email:{data.email}</p>
                         <p>Phone:{data.phone}</p>
                         <p>Message:{data.message}</p>
                   </div>
                </>
              )
            })   
          }
      </p>
      </div>
    )
  };
export default Details;