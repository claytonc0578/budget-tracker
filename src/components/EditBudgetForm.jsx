import { useContext, useState } from "react"
import "../styles/EditBudgetForm.css"
import { AppContext } from "./context/BudgetContext"

export default function EditBudgetForm(props) {
    const [budget, setBudget] = useState(props.budget)
    const { dispatch } = useContext(AppContext)

    function handleSubmit() {
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: budget,
        })
        props.toggleShowEdit()
    }

    function handleCancel() {
        props.toggleShowEdit()
    }
    
    return (
        <div className="edit-budget">
            <p className="edit-budget-title">Edit Budget</p>
            <input className="edit-budget-input"
                required='required'
                type='text'
                id='budget'
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
            >
            </input>

            <button onClick={handleSubmit}
                className="edit-budget-button edit-budget-save"
            >Save</button>

            <button onClick={handleCancel}
                className="edit-budget-button edit-budget-cancel"
            >Cancel</button>
        </div>
    )
}