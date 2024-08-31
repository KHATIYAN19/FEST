import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react"
import { toast } from "react-toastify";
const Upload = () => {
  const[data,setdata]=useState({
    collegename:"",
    name:"",
    location:"",
    singer:"",
    time:"",
    date:""
  });
  const navigate=useNavigate();
  function changeHandler(event) {
    setdata(prev => { 
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  async function sumbitHandler(e){
    e.preventDefault();
    console.log("data printing",data);
    try{ 
      const ans=await axios.post("http://localhost:3000/upload",{ 
         data
      });

       console.log("print success",ans.data);
       if(ans.data.success==true){
         toast.success(ans.data.mesaage);
        console.log(ans.data);
         navigate("/");
       }else{ 
        toast.error("ans.data.mesaage");
       }
    
    }catch(e){
      console.log("respne",e.response.data.mesaage);
      toast.error(e.response.data.mesaage);
       console.log(e);
    }
  }
  return (
    <div className="">
      <div>
        <h2 className="text-black text-center text-xl">UPLOAD A POST</h2>
      </div>
      <div>
        <form action="POST" className="flex flex-col  " onSubmit={sumbitHandler}>
          <label htmlFor="" className="pb-1 text-red-300">College Name:</label>
          <input type="text" className="pt-1 pb-1  pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300" onChange={changeHandler} name="collegename" value={data.collegename} placeholder="GL BAJAJ"/>


          <label htmlFor="" className="pb-1 text-red-300">Your Name:</label>
          <input type="text" className="pt-1 pb-1 pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300"  onChange={changeHandler} name="name" value={data.name} placeholder="AB DEF"/>
        
          <label htmlFor="" className="pb-1 text-red-300">Singer Name:</label>
          <input type="text" className="pt-1 pb-1 pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300"  onChange={changeHandler} name="singer" value={data.singer} placeholder="AB DEF"/>
          <label htmlFor="" className="pb-1 text-red-300">Location</label>
          <input type="text" className="pt-1 pb-1 pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300"  onChange={changeHandler} name="location" value={data.location} placeholder="Delhi"/>


           <label htmlFor="" className="pb-1 text-red-300">Outside students Allowed?</label>
          <input type="text" className="pt-1 pb-1 pl-4 pr-4  outline-violet-300 text-black rounded-lg bg-slate-300"  onChange={changeHandler} name="allowed" placeholder="Only college" />


          <label htmlFor="" className="pb-1 text-red-300">Function date:</label>
          <input type="date" className="pt-1 pb-1 pl-4 pr-4   outline-violet-300 text-black rounded-lg bg-slate-300"  onChange={changeHandler} name="date" placeholder="01-01-2024" />


          <label htmlFor="" className="pb-1 text-red-300">Function Time:</label>
          <input type="time" className="pt-1 pb-1 pl-4 pr-4 outline-violet-300 text-black rounded-lg bg-slate-300"  onChange={changeHandler} name="time" placeholder="19:20" /> 


          <button className="mt-6 bg-red-300 text-white pt-2 pb-2 rounded-lg font-semibold ">Sumbit</button>
        </form>
      </div>
    </div>
  )
};

export default Upload;