export const initialState = {
    balance:5000,
    expenses:[]
};
export const expenseReducer = (state, action) => {
    switch(action.type){
        case "ADD_BALANCE":
            return{
                ...state,
                balance:state.balance+action.payload
            };
        case "ADD_EXPENSE":
            return{
                ...state,
                balance:state.balance -action.payload.amount,
                expenses:[action.payload,...state.expenses]      
            };
        case "EDIT_EXPENSE":{
            const existingExpense=state.expenses.find(exp=>exp.id===action.payload.id);
            if(!existingExpense) return state;
            
            const updateExpense=state.expenses.map(exp=>
                exp.id===action.payload.id ? action.payload :exp
            );
            
            const diff=action.payload.amount -existingExpense.amount;
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