import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  Button,
  CardContent,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Slide,
  Snackbar,
  Alert,
} from "@mui/material";
import { useExpense } from "../../context/ExpenseContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExpenseList() {
  const { state, dispatch } = useExpense();

  const totalExpenses = state.expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (state.editExpense) {
      setTitle(state.editExpense.title);
      setPrice(state.editExpense.amount);
      setCategory(state.editExpense.category);
      setDate(state.editExpense.date);
      setShowForm(true);
    }
  }, [state.editExpense]);

  const handleAddExpense = (e) => {
    e.preventDefault();

    const numAmount = Number(price);

    if (!title || !category || !date || isNaN(numAmount) || numAmount <= 0) {
      setErrorMsg("Please fill all fields correctly.");
      setSnackbarOpen(true);
      return;
    }

    if (!state.editExpense && numAmount > state.balance) {
      setErrorMsg("Insufficient balance.");
      setSnackbarOpen(true);
      return;
    }

    if (state.editExpense) {
      dispatch({
        type: "EDIT_EXPENSE",
        payload: {
          id: state.editExpense.id,
          title,
          amount: numAmount,
          category,
          date,
        },
      });

      dispatch({ type: "SET_EDIT_EXPENSE", payload: null });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: {
          id: Date.now(),
          title,
          amount: numAmount,
          category,
          date,
        },
      });
    }

    setTitle("");
    setPrice("");
    setCategory("");
    setDate("");
    setShowForm(false);
  };

  return (
    <>
      {/* Expense Card */}
      <Card
        sx={{
          width: "100%",
          minHeight: 160,
          borderRadius: 2,
          backgroundColor: "#9B9B9B",
          color: "#fff",
        }}
      >
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5">
              Expenses: ₹
              <Typography component="span" sx={{ color: "#ffa000", ml: 1 }}>
                {totalExpenses}
              </Typography>
            </Typography>

            <Button
              type="button"
              variant="contained"
              size="small"
              sx={{ bgcolor: "#e53935" }}
              onClick={() => setShowForm(true)}
            >
              + Add Expense
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Add Expense Dialog */}
      <Dialog
        open={showForm}
        TransitionComponent={Transition}
        onClose={() => setShowForm(false)}
        fullWidth
        maxWidth="sm"
        onEntered={() => inputRef.current?.focus()}
      >
        <DialogTitle>
          {state.editExpense ? "Edit Expense" : "Add New Expense"}
        </DialogTitle>

        <DialogContent>
          {/* ✅ FORM START */}
          <form onSubmit={handleAddExpense}>
            <Stack spacing={2} mt={1}>
              <TextField
                label="Title"
                name="title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                inputRef={inputRef}
              />

              <TextField
                label="Amount"
                type="number"
                name="price"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              {/* ✅ FIX: spacing added to avoid overlap */}
              <TextField
                label="Category"
                name="category"
                select
                fullWidth
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                SelectProps={{ native: true }}
                sx={{ mb: 2 }}
              >
                <option value=""></option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
              </TextField>

              <TextField
                type="date"
                label="Date"
                name="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                {/* ✅ MUST be submit */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ bgcolor: "#ffc107" }}
                >
                  {state.editExpense ? "Update Expense" : "Add Expense"}
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    dispatch({ type: "SET_EDIT_EXPENSE", payload: null });
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </form>
          {/* ✅ FORM END */}
        </DialogContent>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">{errorMsg}</Alert>
      </Snackbar>
    </>
  );
}
