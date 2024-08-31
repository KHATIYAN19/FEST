import React from "react"
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
const Done = () => {
  return (
    <div className=" mt-10 text-white h-max text-center h-max ">
       <div className=" rounded-md bg-green-600 mx-auto pt-10 w-[60%]  pb-8" >
                 <h3 className="text-2xl pb-2">Thank You for showing Your interest in us</h3>
                 <p>Our team will contact you soon !</p>
                 <p className="pb-6"> hava a nice day ahead !</p>
                 <Link className="  px-6 py-2 bg-red-400 rounded-md " to={"/"}>Find Fests & Music Nights</Link>
        </div>
    </div>
  )
};
export default Done;
