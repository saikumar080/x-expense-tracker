import { createContext,  useContext, useEffect, useReducer } from "react";
import { expenseReducer, initialState } from "./expenseReducer";
const ExpenseContext=createContext();
export function ExpenseProvider({children}){
    const stored=JSON.parse(localStorage.getItem("expenseData"));
    const[state,dispatch]=useReducer(expenseReducer,stored || initialState);
    useEffect(()=>{
        localStorage.setItem("expenseData",JSON.stringify(state));

    },[state]);
    return(
        <ExpenseContext.Provider value={{state,dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}
export const useExpense=() => useContext(ExpenseContext);