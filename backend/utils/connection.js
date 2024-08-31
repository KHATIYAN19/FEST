const { connect } = require("http2");
const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Fest");
}
function dbconnection(){
    main().then(()=>{
        console.log("db connected");
    })
    .catch((e)=>{
        console.log(e);
    })
}
module.exports=dbconnection;