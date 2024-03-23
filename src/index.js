import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";
import connectDB from "./database/index.js";

dotenv.config({
    path: "./env"
});
// Method 1 connect Database
await connectDB();


// Method 2 connect Database
// (async() =>{
//     try {
//         let connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
//         console.log('mongoDB instance :',connectionInstance.connection.host);
//     } catch (error) {
//         console.log("MongoDB error :",error);
//         process.exit(1);
//     }
// })()

// console.log('done');
