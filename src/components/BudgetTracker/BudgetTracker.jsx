import { AppProvider } from "./context/BudgetContext";
import "../../styles/BudgetTracker.css"
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import Graph from "../Graph/Graph";

export default function BudgetTracker() {
    return (
        <AppProvider>
            <div className="budget-tracker">
                <RecentTransactions />
                <Graph />
            </div>
        </AppProvider>
    )
}