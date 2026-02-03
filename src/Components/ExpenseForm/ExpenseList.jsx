import React, { useEffect, useState } from "react";
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
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = React.useRef(null);

   useEffect(()=>{
    if(state.editExpense){
      setTitle(state.editExpense.title);
      setAmount(state.editExpense.amount);
      setCategory(state.editExpense.category);
      setDate(state.editExpense.date);
      setShowForm(true);
    }
   },[state.editExpense]);
  // handle add expense form
  const handleAddExpense = () => {
    const numAmount = Number(amount);

    if (!title || !category || !date || isNaN(numAmount) || numAmount <= 0) {
      setErrorMsg("Please fill all fields correctly.");
      setSnackbarOpen(true);
      return;
    }
    if(!state.editExpense && numAmount > state.balance) {
      setErrorMsg("Insufficient balance.");
      setSnackbarOpen(true);
      return;
    }
    if(state.editExpense){
      const oldAmount=state.editExpense.amount;
      const extraAmount=numAmount - oldAmount;
      if(extraAmount >0 && extraAmount > state.balance){
        setSnackbarOpen(true);
        return;
      }
      dispatch({
        type: "EDIT_EXPENSE",
        payload: {
          id: state.editExpense.id,
          title,  
          amount: numAmount,
          category,
          date
        }
      })
      dispatch({
        type:"SET_EDIT_EXPENSE",
        payload:null
      });
    }else{
      dispatch({
        type: "ADD_EXPENSE",
        payload: {
          id: Date.now(),
          title,
          amount: numAmount,
          category,
          date
        }
      })
    }


    // reset form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setShowForm(false);
  };
 
  return (
    <>
      {/* Expense Card */}
      <Card
        className="card"
   sx={{ width: '100%', minHeight: 160,  borderRadius:8, backgroundColor:'#9B9B9B', color:'#FFFFFF',fontFamily:'Ubuntu, sans-serif',fontWeight:'700', boxShadow:'0px 4px 10px rgba(0,0,0,0.1)', transition:'transform 0.3s ease ', cursor:"pointer", '&:hover':{transform:'scale(1.02)'}}}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5">
              Expenses: ₹
              <Typography
                component="span"
                sx={{
                  color: "#ffa000",
                  fontWeight: "700",
                  fontSize: 32,
                  ml: 1
                }}
              >
                {totalExpenses}
              </Typography>
            </Typography>

            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#e53935",
                "&:hover": { bgcolor: "#ff1744" },
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                paddingX: { xs: 1.5, sm: 2 },
                paddingY: { xs: 0.5, sm: 1 }
              }}
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
        <DialogTitle sx={{ color: "#212121" }}>
          {state.editExpense ? "Edit Expense" : "Add New Expense"}
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Title"
              name="title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              inputRef={inputRef}
              inputProps={{name: "title"}}
            />

            <TextField
              label="price"
              type="number"
              name="price"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              inputProps={{  name: "price" }}
            />

    <TextField
      label="Category"
      fullWidth
      select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      SelectProps={{
        native: true,
        inputProps: {
          name: "category",  
        },
      }}
    >
      <option value=""></option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Entertainment">Entertainment</option>
    </TextField>



            <TextField
              type="date"
              label="Date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                onClick={handleAddExpense}
                variant="contained"
                sx={{ bgcolor: "#ffc107", "&:hover": { bgcolor: "#ff9800" } }}
              >
               {state.editExpense ? "Update Expense" : "Add Expense"}
              </Button>

              <Button
                onClick={() => {
                  setShowForm(false);
                  dispatch({
                    type: "SET_EDIT_EXPENSE",
                    payload: null
                  })
                }}
                sx={{
                  bgcolor: "#eeeeee",
                  "&:hover": { bgcolor: "#d84315" },
                  color: "black"
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </>
  );
}
