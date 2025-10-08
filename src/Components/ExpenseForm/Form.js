import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";

const ExpenseForm = ({ open, handleClose, walletBalance, setWalletBalance, expenses, setExpenses }) => {
  const [formData, setFormData] = useState({ title: "", price: "", category: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = parseFloat(formData.price);

    if (price > walletBalance) {
      alert("Cannot spend more than wallet balance!");
      return;
    }

    const newExpense = { ...formData, price, id: Date.now() };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setWalletBalance(walletBalance - price);
    setFormData({ title: "", price: "", category: "", date: "" });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", pb: 1 }}>Add Expenses</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={3}>
              <TextField label="Title" name="title" value={formData.title} onChange={handleChange} required fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Price" name="price" type="number" value={formData.price} onChange={handleChange} required fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button variant="outlined" onClick={handleClose} fullWidth sx={{ height: 56 }}>Cancel</Button>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: "#ff7043", "&:hover": { bgcolor: "#ff4d4d" }, height: 56 }}>
                Add Expense
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField select label="Category" name="category" value={formData.category} onChange={handleChange} required fullWidth>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Rent">Rent</MenuItem>
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Date" name="date" type="date" value={formData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} required fullWidth />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseForm;
