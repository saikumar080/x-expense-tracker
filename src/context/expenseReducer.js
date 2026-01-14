export const initialState = {
    balance:5000,
    expenses:[]
};
export const expenseReducer = (state, action) => {
    switch(action.type){
        case "ADD_BALANCE":
            return{...state,balance:state.balance+action.payload};
        case "ADD_EXPENSE":
            return{
                ...state,
                balance:state.balance -action.payload.amount,
                expenses:[action.payload,...state.expenses]      
            };
        case "EDIT_EXPENSE":{
            const updateExpense=state.expenses.map(exp=>
                exp.id===action.payload.id ? action.payload :exp
            );
            const oldAmount=state.expenses.find(e=>e.id === action.payload.id).amount
            const diff=action.payload.amount - oldAmount;
            return{
                ...state,
                balance:state.balance - diff,
                expenses:updateExpense
            };
        }
        case "DELETE_EXPENSE":{
            return{
                ...state,
                balance:state.balance + action.payload.amount,
                expenses:state.expenses.filter(exp=>exp.id !== action.payload.id)
            };
        }
        default:
            return state;
    }
}