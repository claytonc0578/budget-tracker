import { AppProvider } from "./context/BudgetContext";
import "../../styles/BudgetTracker.css"
import RecentTransactions from "./RecentTransactions/RecentTransactions";

export default function BudgetTracker() {
    return (
        <AppProvider>
            <div className="budget-tracker">
                <RecentTransactions />
            </div>
        </AppProvider>
    )
}