import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cors from "cors"
import connectDB from "./src/config/mongo.config.js";
import { useRouter } from "./src/routes/router.js";
import { cronSchedular } from "./src/config/cron.js";
const app=express();

const PORT=process.env.PORT || 3000;

app.listen(PORT,async (err)=>{
    if(err) throw err;
    else{
        await connectDB();
        cronSchedular();
        console.log("server started");
    }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use("/user",useRouter);
