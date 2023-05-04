import { useContext } from "react"
import "../../styles/Graph.css"
import { AppContext } from "../BudgetTracker/context/BudgetContext"
import PieChart from "./PieChart"
import BudgetBar from "./BudgetBar"

export default function Graph() {
    const { expenses } = useContext(AppContext)

    const numTransactions = expenses.length // num of transactions from expenses array

    return (
        <div className="graph">
            <BudgetBar />
            <div className="transaction-num-bubble">
                <p className="transaction-num-text">Transactions</p>
                <p className="transaction-num-value">{numTransactions}</p>
            </div>
            <PieChart />
        </div>
    )
}