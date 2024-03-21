import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB=async()=>{
    try {
        const connectInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Your data base is connected securly ${connectInstance.connection.host}`)
    } catch (error) {
        console.log("mongo db connection error",error);
        process.exit(1);
    }
}

export default connectDB;