import React from "react"

const Post = (data={festdata}) => {
   const fest=data.data;
  return (
    <div className="w-[24%] h-[400px] rounded-lg p-3 mb-4 bg-violet-50 hover:scale-1.25">
        <div>
            <img className="h-[200px] object-cover w-[150%] rounded-lg" src={fest.image} alt="" />
        </div>
        <div className="pt-2">
            <h2 className="text-xl text-bold text-red-900">{(fest.singer).toUpperCase()}</h2>
            <p className="text-md">College: {fest.collegename} </p>
            <p className="text-sm">Location:{fest.location}</p>
            <p><span>Date: {fest.date}</span><span>  Onwards {fest.time}</span></p>
            <p className="text-xs ">Post By: {fest.name}</p>
            <p className="text-xs pt-3">Other college Student allow:{fest.allowed}</p>
        </div>    
         
    </div>
    
  )
};

export default Post;
