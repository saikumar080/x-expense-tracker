import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddExpenseForm from "./Form";

const AddExpense = ({ walletBalance, setWalletBalance, onAddExpense }) => {
  const [open, setOpen] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // Calculate total expense
  const totalExpense = expenses.reduce((acc, exp) => acc + exp.price, 0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    onAddExpense && onAddExpense(expenses);
  }, [expenses, onAddExpense]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
    setWalletBalance((prev) => prev - expense.price);
  };

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
      {/* Expenses Header */}
      <Typography variant="h6" sx={{ color: "#fff", fontWeight: 800 }}>
        Expenses: ${totalExpense}
      </Typography>

      {/* Add Expense Button */}
      <Button
        type="button"
        variant="contained"
        sx={{ bgcolor: "#ff7043", fontWeight: "bold", "&:hover": { bgcolor: "#ff4d4d" } }}
        onClick={() => setOpen(true)}
      >
        + Add Expense
      </Button>

      {/* Add Expense Form Modal */}
      {open && (
        <AddExpenseForm
          open={open}
          handleClose={() => setOpen(false)}
          onSubmit={handleAddExpense}
        />
      )}
    </Box>
  );
};

export default React.memo(AddExpense);
