
import { useExpense } from "../../context/ExpenseContext"
import styles from "./walletBalance.module.css";
export default  function WalletBalance() {
    const {state}=useExpense();
    return(
        <div className={`${styles.card} `}>
            <h2 className={styles.title}>Wallet Balance: <span className={styles.amount}>₹ {state.balance}</span></h2>
            
            <button className={styles.addButton} type="button" >+ Add Income</button>
        </div>
    )
}