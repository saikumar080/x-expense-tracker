export const initialState = {
  balance: JSON.parse(localStorage.getItem("balance")) || 5000,
  expenses: JSON.parse(localStorage.getItem("expenses")) || [],
  editExpense: null
};

export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BALANCE":
      return {
        ...state,
        balance: state.balance + action.payload
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        expenses: [...state.expenses, action.payload]
      };

    case "SET_EDIT_EXPENSE":
      return {
        ...state,
        editExpense: action.payload
      };

    case "EDIT_EXPENSE": {
      const existingExpense = state.expenses.find(
        (exp) => exp.id === action.payload.id
      );
      if (!existingExpense) return state;

      const diff = action.payload.amount - existingExpense.amount;

      if (diff > 0 && state.balance < diff) {
        return state;
      }

      const updatedExpenses = state.expenses.map((exp) =>
        exp.id === action.payload.id ? action.payload : exp
      );

      return {
        ...state,
        balance: state.balance - diff,
        expenses: updatedExpenses
      };
    }

    case "DELETE_EXPENSE":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        expenses: state.expenses.filter(
          (exp) => exp.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
