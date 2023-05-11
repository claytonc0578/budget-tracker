import { useContext, useState } from "react"
import { AppContext } from "./context/BudgetContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/fontawesome-free-solid"
import EditBudgetForm from "./EditBudgetForm"

export default function Budget() {
    const { budget } = useContext(AppContext)
    const [showEdit, setShowEdit] = useState(false)

    function toggleShowEdit() {
        setShowEdit(!showEdit)
    }

    return (
        <div className="budget-container">
            <div className="budget bubble center"
                onClick={toggleShowEdit}
            >
                <FontAwesomeIcon icon={faArrowUp} 
                    className="arrow-icon"
                />

                <div className="bubble-container">
                    <p className="bubble-text">Budget</p>
                    <p className="bubble-value">${budget}</p>
                </div>
            </div>

            { showEdit && 
                <EditBudgetForm 
                toggleShowEdit={toggleShowEdit}
                budget={budget}
            /> }

        </div>

    )
}