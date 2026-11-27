import express from "express";
import { configDotenv } from "dotenv";
const app=express();

const port=process.env.PORT || 8080;
app.get("/",async(req,res)=>{
    return res.status(200).json({
        message:"Server is running and this is the new Version v1."
    })
})
app.listen(port,()=>{
    console.log(`Server is running on PORT http://localhost:${port}`)
}) 