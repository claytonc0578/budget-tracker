import { useContext } from "react"
import { AppContext } from "./context/BudgetContext"

export default function BudgetBar() {
    const { budget, expenses } = useContext(AppContext)

    const totalSpending = expenses.reduce((acc, expense) => (
        acc + expense.cost
    ), 0)

    const percentFilled = (totalSpending / budget) * 100

    const overBudget = totalSpending > budget

    return (
        <div className="budget-bar-container">

            <div className={`budget-bar-left-container `}>

                <p className="budget-bar-value">
                    ${budget - totalSpending}
                </p>

                <p className="budget-bar-text"
                    style={{ marginLeft: "0.5rem"}}
                >Left</p>

            </div>

            <div className="budget-bar">
                <div className="budget-bar-spent" 
                style={{width: `${percentFilled}%`}}></div>
            </div>

            <p className={`budget-bar-text ${overBudget ? "over-budget" : ""}`}>
                <span className="bold">${totalSpending}</span> of ${budget} spent
            </p>

        </div>

    )
}