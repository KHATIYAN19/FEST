import React from "react"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Done from "./Done"
import { toast } from "react-toastify";
const Contact = () => {
  const navigate=useNavigate();
  const[data,setdata]=useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });
  function changeHandler(event) {
    setdata(prev => { 
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  const[thankpage,setthankpage]=useState(false);
  async function sumbitHandler(e){
    e.preventDefault();
    console.log("data printing",data);
    try{ 
      const ans=await axios.post("http://localhost:3000/contact",{data});
       console.log("print success",ans.data.success);
       if(ans.data.success==true){
        toast.success(ans.data.mesaage);
        setthankpage(true);
        setdata(data.name="");
        setTimeout(()=>{
          setthankpage(false);
       },5000)
        console.log("thakpage",thankpage);
        console.log("true",ans.data.success);
       }else{
        toast.error("ans.data.mesaage");
       }
    }catch(e){
      toast.error(e.response.data.mesaage);
       console.log(e);
    }
  }
  return (
    <div>
        {
          thankpage?(<Done/>):(<div>
            <form action="POST" className="flex flex-col mt-5 " onSubmit={sumbitHandler}>
             <label htmlFor="" className="pb-1 text-red-300">Name:</label>
             <input type="text" className="pt-1 pb-1  pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300" onChange={changeHandler} name="name" value={data.name} placeholder="Enter your name"/>
             <label htmlFor="" className="pb-1 text-red-300">Email:</label>
             <input type="text" className="pt-1 pb-1 pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300"  onChange={changeHandler} name="email" value={data.email} placeholder="Enter your email"/>
             <label htmlFor="" className="pb-1 text-red-300">Phone:</label>
             <input type="text" className="pt-1 pb-1 pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300"  onChange={changeHandler} name="phone" value={data.phone} placeholder="Enter your number"/>
             <label htmlFor="" className="pb-1 text-red-300">Message</label>
             <textarea rows={4} className="pt-1 pb-1 pl-4 pr-4 rounded-lg outline-violet-300 text-black bg-slate-300"  onChange={changeHandler} name="message" value={data.message} placeholder="Write a Message"/>
             <button className="mt-6 bg-red-300 text-white pt-2 pb-2 rounded-lg font-semibold ">Sumbit</button>
            </form>
           </div>)
        }
    </div>
    )
};
export default Contact;
