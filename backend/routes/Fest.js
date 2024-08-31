const express=require("express");
const router=express.Router();
const Fest=require("../models/Fest");
const {upload,getallfest} =require("../controllers/Festcontroller");
router.get("/post",(req,res)=>{
    res.send(`<p>hello i am post</p>`);
})
router.post("/upload",upload);
router.get("/getall",async(req,res)=>{
    try{
        const fests=await Fest.find({});
        console.log(fests);
        return res.status(200).json({
            success:true,
            mesaage:"Upload successfully",
            fests,
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            mesaage:"Something Went Wrong",
        })
} });
module.exports=router;