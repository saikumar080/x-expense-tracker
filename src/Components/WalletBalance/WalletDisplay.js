import { Button, Typography,Box } from "@mui/material";
import React, { useState } from "react";
const WalletDisplay=({income, onAddIncome})=>{

   
    return(
        <>
            <Box 
                className="display-wallet" 
                sx={{
                    p:4,
                    borderRadius:3,
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:5,
                    fontFamily:"Ubuntu", 
                    // fontWeight:"bold", 
                    bgcolor:"#9b9b9b",
                    width:"100%",
                    maxWidth:300
                }}
            >
            <Typography variant="h5" sx={{color:"#fff", fontWeight:800,textAlign:"center"}}>Wallet Balance:{" "}
                <Box component={"span"} sx={{color:"#91ff35", fontWeight:900}}>₹{income}</Box>
            </Typography>
            <Button variant="contained"  sx={{bgcolor:"#8bc34a", fontWeight:"bold","&:hover":{bgcolor:"#7cb342"} }} onClick={onAddIncome} >+ Add Income</Button>
            </Box>
        </>
        
    )
}
export default WalletDisplay;