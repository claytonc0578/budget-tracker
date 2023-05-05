import { AppProvider } from "./context/BudgetContext";
import "../styles/BudgetTracker.css"
import RecentTransactions from "./RecentTransactions";
import Graph from "./Graph";

export default function BudgetTracker() {
    return (
        <div className="budget-tracker">
            <RecentTransactions />
            <Graph />
        </div>
    )
}