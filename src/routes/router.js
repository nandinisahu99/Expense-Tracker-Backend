import { Router } from "express";
import { addExpense, addIncome, deleteExpense, deleteIncome, getExpense, getIncome } from "../controller/controller.js";

export const useRouter=Router();

useRouter.post('/add-income',addIncome);
useRouter.get('/get-income',getIncome);
useRouter.delete('/delete-income/:id',deleteIncome);

useRouter.post('/add-expense',addExpense);
useRouter.get('/get-expense',getExpense);
useRouter.delete('/delete-expense/:id',deleteExpense);