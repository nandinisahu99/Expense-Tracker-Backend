import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const URL=process.env.MONGO_URL;
const connectDB=async()=>{
    try{
        await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Db Connected");
    }catch(err){
        console.log("Db connection failed");
    }

}
export default connectDB;