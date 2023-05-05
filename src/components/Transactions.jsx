import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BudgetBar2 from "./BudgetBar2";
import TransactionList from "./TransactionList";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

export default function Transaction() {
    return (
        <div className="transaction-container">

            <div className="top-container">
                <Link to={"/"}
                className="back-button"
                >
                    <FontAwesomeIcon icon={faChevronLeft} 
                        className="back-icon"
                    />
                    <p className="back-text">Back</p>
                </Link>

                <h3 className="top-title">Overall Budget</h3>
            </div>

            <BudgetBar2 />
            <TransactionList />
        </div>
    )
}