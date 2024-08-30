import { usermodel } from "./Income.model.js";
import {userexpense} from "./Expense.model.js";

export const createUser=async(obj)=>{
    // return await usermodel.create(obj); or

    const newuser=usermodel(obj);
    await newuser.save();
    return newuser;
}

export const getUserRepo=async(obj)=>{
    const x=await usermodel.findOne(obj);
    return x;
}

export const getUserSort=async(obj)=>{
    const x=await usermodel.find().sort({createdAt:-1});
}

export const checkTransactionsForToday = async () => {
    const currentDate = new Date();
    const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));

    const transactions = await userexpense.find({
        date: { $gte: startOfDay }
    });

    const transaction1 = await usermodel.find({
        date: { $gte: startOfDay }
    });
    return (transactions.length > 0 || transaction1.length>0);
};