import { useContext } from "react"
import { AppContext } from "./context/BudgetContext"

export default function BudgetBar2() {
    const { budget, expenses } = useContext(AppContext)

    const totalSpending = expenses.reduce((acc, expense) => (
        acc + expense.cost
    ), 0)

    const percentFilled = (totalSpending / budget) * 100

    return (
        <div className="budget-bar2-container">

            <div className="budget-bar2-left-container">

                <p className="budget-bar2-value">
                    ${budget - totalSpending}
                </p>

                <p className="budget-bar2-text"
                    style={{ marginLeft: "0.5rem"}}
                >Left</p>

            </div>

            <div className="budget-bar2">
                <div className="budget-bar2-spent" style={{width: `${percentFilled}%`}}></div>
            </div>

            <p className="budget-bar2-text">
                <span className="bold">${totalSpending}</span> of ${budget} spent
            </p>

        </div>

    )
}