import React from "react";
import { Box, Button, Typography } from "@mui/material";
// import Styles from ""
const AddExpense=()=>{
    const income=0;
    return(
        <>
            <Box className="expense-form" 
                sx={{
                    p:4,
                    borderRadius:3,
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:5,
                    fontFamily:"Ubuntu", 
                    fontWeight:"bold",
                    bgcolor:"#9b9b9b",
                    width:"100%",
                    maxWidth:300
                }}>
                <Typography variant="h5" sx={{color:"#fff", fontWeight:800}}>Wallet Balance:{" "}
                    <Box component={"span"} style={{color:"#ff7043", fontWeight:"bold"}}>₹{income}</Box>
                </Typography>
                <Button  sx={{bgcolor:"#ff7043", fontWeight:"bold","&:hover":{bgcolor:"#ff4d4d"} }}variant="contained" >+ Add Income</Button>
                       
        </Box>
        </>
        
        
    )
}
export default AddExpense;