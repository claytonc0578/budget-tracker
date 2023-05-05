import { useContext } from "react"
import { AppContext } from "./context/BudgetContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/fontawesome-free-solid"

export default function Budget() {
    const { budget } = useContext(AppContext)

    return (
        <div className="budget bubble center">
            <FontAwesomeIcon icon={faArrowUp} 
                className="arrow-icon"
            />
            <div className="bubble-container">
                <p className="bubble-text">Budget</p>
                <p className="bubble-value">${budget}</p>
            </div>
        </div>
    )
}