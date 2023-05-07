import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BudgetBar2 from "./BudgetBar2";
import TransactionList from "./TransactionList";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";

export default function Transaction() {
    const navigate = useNavigate()
    const [showAddExpense, setShowAddExpense] = useState(false)

    function toggleAddExpense() {
        setShowAddExpense(!showAddExpense)
    }

    return (
        <div className="transaction-container">

            <div className="top-container">
                <div className="back-button"
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} 
                        className="back-icon"
                    />
                    <p className="back-text">Back</p>
                </div>

                <h3 className="top-title">Overall Budget</h3>
            </div>

            <BudgetBar2 />
            
            <div className="transaction-list-container">
                <p className="transaction-list-title">Transaction List</p>
                <div className="add-expense-button center"
                    onClick={toggleAddExpense}
                >
                    <p>Add Expense</p>
                </div>
            </div>

            <TransactionList />
            
            {showAddExpense && 
                <AddExpenseForm 
                    toggleAddExpense={toggleAddExpense}
                />
            }
        </div>
    )
}