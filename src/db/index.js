import mongoose from "mongoose";
import { DBname } from "../constants.js";

async function connectDB() {
    try {
        const conn = await mongoose.connect (`${process.env.MONGODB_URI}/${DBname}`, {
          
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
