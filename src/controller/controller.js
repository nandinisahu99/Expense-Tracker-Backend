import { userexpense } from "../model/Expense.model.js";
import { usermodel } from "../model/Income.model.js";
import { createUser} from "../model/repo.js";

export const addIncome=async(req,res,next)=>{
    try{
        const {title,amount,category,description,date}=req.body;

        if(amount==='number' || amount<=0){
            res.send({status:false,message:"Amount must be a positive number"});
        }
        if(!title || !amount || !category || !description || !date){
            res.send({status:false,message:"All fields are required"})
        }

        const income=await createUser({title,amount,category,description,date});
        console.log(income);
        res.send({status:true,message:"Your Income is added"});
    }catch(err){
        throw err;
    }
}

export const getIncome=async(req,res,next)=>{
    try{
        const income=await usermodel.find().sort({createdAt:-1});
        res.send({status:true,income:income});
    }catch(err){
        throw err;
    }
}

export const deleteIncome=async(req,res,next)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        usermodel.findByIdAndDelete(id).then((income)=>{
            res.send({status:true,message:"Successfully Deleted"});
        })
    }catch(err){
        throw err;
    }
}


export const addExpense=async(req,res,next)=>{
    try{
        const {title,amount,category,description,date}=req.body;

        if(amount==='number' || amount<=0){
            res.send({status:false,message:"Amount must be a positive number"});
        }
        if(!title || !amount || !category || !description || !date){
            res.send({status:false,message:"All fields are required"})
        }

        const expense=await userexpense.create({title,amount,category,description,date});
        console.log(expense);
        res.send({status:true,message:"Your expense is added"});
    }catch(err){
        throw err
    }
}

export const getExpense=async(req,res,next)=>{
    try{
        const expense=await userexpense.find().sort({createdAt:-1});
        res.send({status:true,expense:expense});
    }catch(err){
        throw err;
    }
}

export const deleteExpense=async(req,res,next)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        userexpense.findByIdAndDelete(id).then((expense)=>{
            res.send({status:true,message:"Expense Successfully Deleted"});
        })
    }catch(err){
        throw err;
    }
}