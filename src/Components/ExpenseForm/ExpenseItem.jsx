import React, { useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import ExpenseModal from "./ExpenseModal";
function ExpenseItem({expense}){
    const{dispatch}=useExpense();
    const [editOpen,setEditOpen]=useState(false);
    const handleDelete=()=>{
        dispatch({type:"DELETE_EXPENSE",payload:expense});
    }
    return(
        <div className="expense-item">
            <span>{expense.title}</span>
            <span>₹ {expense.amount}</span>
            <span>{expense.category}</span>
            <button onClick={()=>setEditOpen(true)}>Edit</button>
            <button onClick={handleDelete}></button>
            <ExpenseModal
                isOpen={editOpen}
                onClose={()=>setEditOpen(false)}
                editData={{expense}}
             />
        </div>
    )
}
export default ExpenseItem;