import express from "express";
import cors from "cors"
const app=express()
app.use(express.json())
app.use(cors())


app.get("*",(req,res)=>{
    
    res.send("Succesfully logged in")
})
app.listen('4000',()=>{
    console.log(`server running on port 4000`);
})