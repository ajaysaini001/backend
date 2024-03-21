import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB();



// import express  from "express";
// const app=express();
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(error);
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })()

// app.listen(process.env.PORT,()=>{
//     console.log(`App is Listing  ${process.env.PORT}`);
// })