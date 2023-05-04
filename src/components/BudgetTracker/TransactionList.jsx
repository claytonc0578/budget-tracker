import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { AppContext } from "./context/BudgetContext";
import "../../styles/Transaction.css"

export default function TransactionList() {
    const { expenses } = useContext(AppContext)

    return (
        <div className="transaction-list">
            {expenses.map((expense) => (
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