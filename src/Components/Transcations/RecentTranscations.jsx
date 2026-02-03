import React from "react";
import {
  Card,
  List,
  ListItem,
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useExpense } from "../../context/ExpenseContext";

export default function RecentTransactions() {
  const { state, dispatch } = useExpense();
  const catergoryLabelMap = {
    Food: "Food",
    Travel: "Travel",
    Entertainment: "Entertainment",
  }

  const handleDelete = (expense) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense,
    });
  };

  if (state.expenses.length === 0) {
    return (
      <Typography color="text.secondary">
        No recent transactions
      </Typography>
    );
  }

  return (
    <>
        <Typography variant="h5" gutterBottom sx={{padding:2, margin: 2,textAlign: { xs: "center", sm: "center", md: "left" }}}>
            Recent Transactions
        </Typography>
        <Card sx={{ padding: 2, width: '100%', boxSizing: 'border-box', maxHeight: '400px', overflowY: 'auto' }}>
      <List>
        {state.expenses.map((expense, index) => (
          <React.Fragment key={expense.id}>
            <ListItem
              disableGutters
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton
                    sx={{ backgroundColor: "#f1c707" }}
                    onClick={() =>
                      dispatch({
                        type: "SET_EDIT_EXPENSE",
                        payload: expense,
                      })
                    }
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(expense)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
              <Stack>
                <Typography fontWeight={600}>
                  {expense.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
  {catergoryLabelMap[expense.category]} • {expense.date}
</Typography>
              </Stack>

              <Typography
                sx={{ marginLeft: "auto", marginRight: 8 }}
                fontWeight={600}
                color="error"
              >
                ₹{expense.amount}
              </Typography>
            </ListItem>

            {index !== state.expenses.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
    </>
    
  );
}
