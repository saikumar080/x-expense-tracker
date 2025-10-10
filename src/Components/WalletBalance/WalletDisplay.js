import React, { useState,useEffect } from "react";
import { Button, Typography, Box,  } from "@mui/material";
import AddIncomeForm from "./AddIncomeForm";
const WalletDisplay = () => {
  const [balance, setBalance] = useState(5000);
  const [open, setOpen] = useState(false);
  
// Save balance to localStorage whenever it changes
  useEffect(() => {
  const savedBalance=  localStorage.setItem("walletBalance", balance);
  if(savedBalance) setBalance(Number(savedBalance));
  }, [balance]);

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


 

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        fontFamily: "Ubuntu",
        bgcolor: "#9b9b9b",
        width: "100%",
        maxWidth: 300,
        position: "relative",
        mx: "auto",
        mt: 5,
      }}
    >
      <Typography variant="h5" sx={{ color: "#fff", fontWeight: 800, textAlign: "center" }}>
        Wallet Balance:{" "}
        <Box component={"span"} sx={{ color: "#91ff35", fontWeight: 900 }}>
          ${balance.toFixed(2)}
        </Box>
      </Typography>

      <Button
        type="button"
        variant="contained"
        sx={{ bgcolor: "#8bc34a", fontWeight: "bold", "&:hover": { bgcolor: "#7cb342" } }}
        onClick={handleOpen}
      >
        + Add Income
      </Button>
      <AddIncomeForm open={open} handleClose={handleClose} balance={balance} setBalance={setBalance} />
    </Box>
  );
};

// ✅ Memoize WalletDisplay to prevent parent re-renders affecting it
export default React.memo(WalletDisplay);
