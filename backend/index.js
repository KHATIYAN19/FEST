const express=require("express");
const app=express();
const dbconnection =require("./utils/connection"); 
const FestRoute=require("./routes/Fest");
const cors=require("cors");
const contactroute=require("./routes/contactroute");
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
dbconnection();
app.use(express.urlencoded({extended:true}));
app.use("/",FestRoute);
app.use("/",contactroute);
app.listen(3000,(req,res)=>{
    console.log("App is listen");
})
app.get("/home",(req,res)=>{
    res.send(`hi`);
})
app.use("/",FestRoute);

