import { useContext } from "react"
import { AppContext } from "../context/BudgetContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/fontawesome-free-solid"

export default function ExpenseTotal() {
    const { expenses } = useContext(AppContext)

    const totalExpense = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)

    return (
        <div className="expense-total bubble center">
            <FontAwesomeIcon icon={faArrowDown} 
                className="arrow-icon"
            />
            <div className="bubble-container">
                <p className="bubble-text">Expenses</p>
                <p className="bubble-value">{totalExpense.toFixed(2)}</p>
            </div>
        </div>
    )
}