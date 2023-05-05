import { useContext } from "react"
import { AppContext } from "../context/BudgetContext"

export default function Remaining() {
    const { expenses, budget } = useContext(AppContext)

    const totalExpense = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    const isOverBudget = totalExpense > budget

    return (
        <div className={`remaining bubble center
            ${isOverBudget ? "over-budget" : ""}`}>
            <p className="bubble-value">${(budget - totalExpense).toFixed(2)}</p>
            <p className="bubble-text" style={{ marginLeft: "0.5rem"}}>Left</p>
        </div>
    )
}