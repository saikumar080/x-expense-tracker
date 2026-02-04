import { createContext,  useContext, useEffect, useReducer } from "react";
import { expenseReducer, initialState } from "./expenseReducer";
const ExpenseContext=createContext();
export function ExpenseProvider({children}){
    const[state,dispatch]=useReducer(expenseReducer,initialState);
    useEffect(()=>{
        localStorage.setItem("expenses",JSON.stringify(state.expenses));

    },[ state.expenses]);
    useEffect(()=>{
        localStorage.setItem("balance",JSON.stringify(state.balance));
    },[state.balance]);


    return(
        <ExpenseContext.Provider value={{state,dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}
export const useExpense=() => useContext(ExpenseContext);