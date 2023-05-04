import Budget from "./Budget";
import ExpenseTotal from "./ExpenseTotal";
import "../../../styles/RecentTransactions.css"
import TransactionList from "../TransactionList";

export default function RecentTransactions() {
    return (
        <div className="recent-transactions">
            <div className="income-expenses-container">
                <Budget />
                <ExpenseTotal />
            </div>

            <div className="recent-transaction-title-container">
                <p className="list-title">Recent Transaction</p>
                <div className="see-all-button">See All</div>
            </div>

            <TransactionList />
        </div>
    )
}