import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`yout data is avaliable ${process.env.PORT}`)
    })
}
)
.catch((err)=>{
    console.log(err)
}
)



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