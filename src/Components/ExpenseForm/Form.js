import React from "react";
import { Button } from "@mui/material";
// import Styles from ""
const ExpenseForm=()=>{
    const income=0;
    return(
        
        <div className={"expense-form"} style={{fontFamily:"Ubuntu", fontWeight:"bold", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"20px"}}>
            <h1 style={{color:"#ffffff", fontFamily:"Ubuntu", fontSize:"32px"}}>Wallet Balance:
                <span style={{color:"#ffac33", fontWeight:"bold"}}>₹{income}</span>
            </h1>
            <Button  sx={{bgcolor:"#f44336", fontWeight:"bold"}}variant="contained" >+ Add Expense</Button>
        </div>
        
    )
}
export default ExpenseForm;
