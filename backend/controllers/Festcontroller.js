const Fest=require("../models/Fest");
exports.upload=async(req,res)=>{
    try{
        console.log("1");
        const {allowed,collegename,date,location,name,time,singer}=req.body.data;
        if(!allowed||!collegename||!date||!location||!name||!time||!singer){
            return res.status(401).json({
                success:false,
                mesaage:"Fill All feild"
            })
        }
        console.log("2");
        const festdeatil= await Fest.create({
                allowed,collegename,date,location,name,time,singer
        })
        console.log(festdeatil);
        console.log("3");
        return res.status(200).json({
            success:true,
            mesaage:"Upload successfully",
            festdeatil,
        }) 
    }catch(e){
        return res.status(400).json({
            success:false,
            mesaage:"Something Went Wrong",
        })
    }
}
exports.allfest=async(req,res)=>{
    try{
        const fests=await Fest.find({});
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
    } 
}
