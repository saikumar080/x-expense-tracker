import React from "react";
import Display from "../WalletBalance/Display";
import ExpenseForm from "../ExpenseForm/Form";
import ExpenseSummary from "../ExpenseSummary/Summary";
const ExpenseTrackerHeader=()=>{
    return(
        <div className="expense-header">
            {/* Wallet Balance */}
            <Display />
            {/* Expense Form */}
            <ExpenseForm />
            {/* Expense Summary */}
            <ExpenseSummary />
        </div>
    )
}
export default ExpenseTrackerHeader;