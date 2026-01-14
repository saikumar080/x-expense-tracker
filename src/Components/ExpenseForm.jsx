import { useSnackbar } from "notistack";
import { useExpense } from "../context/ExpenseContext";
import { v4 as uuid } from "uuid";
import React,{useState} from "react";
function ExpenseForm({onClose,editData}){
    const{state,dispatch}=useExpense();
    const{enqueueSnackbar}=useSnackbar();
    const[title,setTitle]=useState(editData?.title ||"");
    const[amount,setAmount]=useState(editData?.amount ||"");
    const[category,setCategory]=useState(editData?.category ||"");
    const[date, setDate]=useState(editData?.date ||"");
    //form submit handler:
    const handleSubmit=()=>{
        if(!title || !amount || !category || !date){
            enqueueSnackbar("Please fill all the fields", {variant:"warning"});
            return;
        }
        const numAmount=Number(amount);
        if(!editData && numAmount >state.balance){
            enqueueSnackbar("Insufficient balance", {variant:"error"});
            return;
        }
        const expense={
            id:editData?.id || uuid(),
            title,
            amount:numAmount,
            category,
            date
        }
        dispatch({type:editData ? "EDIT_EXPENSE" : "ADD_EXPENSE", payload:expense});
        enqueueSnackbar("Expense saved successfully", {variant:"success"});
        onClose();
    };
    return(
        <div className="expense-form">
            <h2>{editData ? "Edit Expense" : "Add Expense"}</h2>
             <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
             <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            <button onClick={handleSubmit}>{editData ? "Update" : "Add"}</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    )
}
export default ExpenseForm;