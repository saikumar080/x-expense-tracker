import React from "react";
import { Button } from "@mui/material";
const ExpenseForm=()=>{
    const income=0;
    return(
        
        <div className={"expense-form"} style={{fontFamily:"Ubuntu", fontWeight:"bold"}}>
            <h1 style={{color:"#ffffff", fontFamily:"Ubuntu", fontSize:"32px"}}>Wallet Balance:
                <span style={{color:"#91ff35", fontWeight:"bold"}}>₹{income}</span>
            </h1>
            <Button  sx={{bgcolor:"#8bc34a", fontWeight:"bold"}}variant="contained" >+ Add Income</Button>
        </div>
        
    )
}
export default ExpenseForm;
