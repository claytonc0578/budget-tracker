import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { AppContext } from "./context/BudgetContext";
import "../styles/Transaction.css"

export default function RecentTransactionList() {
    const { expenses } = useContext(AppContext)

    // last 4 most recent transaction, most recent at the top/front
    const recentTransactions = expenses.slice(-4).reverse()

    return (
        <div className="recent-transaction-list">
            {recentTransactions.map((expense) => (
            <TransactionItem 
                key={expense.id}
                id={expense.id}
                name={expense.name}
                type={expense.type}
                cost={expense.cost}
            />
            ))}
        </div>
    )
}