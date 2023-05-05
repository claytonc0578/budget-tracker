import BudgetBubble from "./BudgetBubble";
import ExpenseTotalBubble from "./ExpenseTotalBubble";
import "../styles/RecentTransactions.css"
import RecentTransactionList from "./RecentTransactionList";
import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import { Link } from "react-router-dom";

export default function RecentTransactions() {
    const [showAddExpense, setShowAddExpense] = useState(false)

    function toggleAddExpense() {
        setShowAddExpense(!showAddExpense)
    }

    return (
        <div className="recent-transactions">
            <div className="income-expenses-container">
                <BudgetBubble />
                <ExpenseTotalBubble />
            </div>

            <div className="recent-transaction-title-container">
                <p className="list-title">Recent Transactions</p>
                <Link to={"/transactions"}
                className="see-all-button">
                    See All
                </Link>
            </div>

            <RecentTransactionList />

            <div className="add-expense-icon center"
                onClick={toggleAddExpense}
            >
                <p className="add-expense-icon-text" >
                    +
                </p>
            </div>

            {showAddExpense && 
                <AddExpenseForm 
                    toggleAddExpense={toggleAddExpense}
                />
            }
        </div>
    )
}