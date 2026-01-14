import React from "react";
import { useExpense } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
    const{state}=useExpense();
    if(state.expenses.length===0){
        return <p>No expenses</p>
    }
    return(
        <div className="expense-list">
            <h2>Expense </h2>
            {state.expenses.map(exp =>(
               <ExpenseItem key={exp.id} expense={exp} /> 
            ))}
        </div>
    )
}