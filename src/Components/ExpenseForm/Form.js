import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Alert,
  Collapse,
  Fade,
  Backdrop,
  Typography,
} from "@mui/material";

const categories = ["Food", "Travel", "Shopping", "Bills", "Other"];

const AddExpenseForm = ({ open, handleClose }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState({ show: false, message: "" });
  const [success, setSuccess] = useState({ show: false, message: "" });

  // Load existing expenses from localStorage
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  // Save expenses to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !category || !date) {
      setError({ show: true, message: "Please fill all fields!" });
      return;
    }

    const newExpense = { title, price: Number(price), category, date };
    setExpenses((prev) => [...prev, newExpense]);

    setSuccess({ show: true, message: "Expense added successfully!" });
    handleClose();
    setTitle(""); setPrice(""); setCategory(""); setDate("");

    setTimeout(() => setSuccess({ show: false, message: "" }), 2000);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 300 }}
    >
      <Fade in={open}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
            width: 400,
          }}
        >
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}>
                Add Expense
              </Typography>

              {/* Error alert */}
              <Collapse in={error.show}>
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.message}
                </Alert>
              </Collapse>

              {/* Expense Title */}
              <TextField
                label="Title"
                name="title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />

              {/* Expense Price */}
              <TextField
                label="Price"
                name="price"
                type="number"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{ mb: 2 }}
              />

              {/* Expense Category */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  label="Category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Expense Date */}
              <TextField
                label="Date"
                name="date"
                type="date"
                fullWidth
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />

              {/* Buttons */}
              <Box display="flex" justifyContent="space-between">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#b58b00",
                    "&:hover": { bgcolor: "#a07a00" },
                    fontWeight: "bold",
                  }}
                >
                  Add Expense
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={handleClose}
                  sx={{ fontWeight: "bold" }}
                >
                  Cancel
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </Modal>
  );
};

export default React.memo(AddExpenseForm);
