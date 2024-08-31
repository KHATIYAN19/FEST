const mongoose=require("mongoose");
const Festschema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    singer:{
        type:String,
        required:true,
    },
    collegename:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
    date:{
        type:String,
        required:true,
    },
    allowed:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2021/12/13/21/43/drummer-6869168_1280.jpg"
    }
})
module.exports=mongoose.model("Fest",Festschema);