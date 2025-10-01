import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
const Display=()=>{
   const[income, setIncome]=useState(5000);
   
    return(
        <div className={"display-wallet"} style={{fontFamily:"Ubuntu", fontWeight:"bold"}}>
            <h1 style={{color:"#ffffff", fontFamily:"Ubuntu", fontSize:"32px"}}>Wallet Balance:
                <span style={{color:"#91ff35", fontWeight:"bold"}}>₹{income}</span>
            </h1>
            <Button  sx={{bgcolor:"#8bc34a", fontWeight:"bold"}}variant="contained" >+ Add Income</Button>
        </div>
    )
}
export default Display;