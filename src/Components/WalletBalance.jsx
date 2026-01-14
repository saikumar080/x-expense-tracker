
import { useExpense } from "../context/ExpenseContext"

export default  function WalletBalance() {
    const {state}=useExpense();
    return(
        <div className="wallet">
            <h2>Wallet Balance</h2>
            <h1>₹ {state.balance}</h1>
        </div>
    )
}