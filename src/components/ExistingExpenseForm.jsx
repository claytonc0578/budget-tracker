import React, {useContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "./context/BudgetContext";
import "../styles/ExistingExpenseForm.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";

export default function ExistingExpenseForm(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const { prevId, prevName, prevCost, prevType } = location.state
    const { dispatch } = useContext(AppContext)

    const [id, setId] = useState(prevId);
    const [name, setName] = useState(prevName);
    const [cost, setCost] = useState(prevCost);
    const [type, setType] = useState(prevType);

    function onSubmit(event) {
        event.preventDefault();

        const expense = {
            id: id,
            name: name.charAt(0).toUpperCase() + name.slice(1),
            cost: parseFloat(cost),
            type: type,
        };

        dispatch({
            type: 'UPDATE_EXPENSE',
            payload: expense,
        });
        navigate(-1)
    }

    function handleDelete() {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
        navigate(-1)
    }

    return (
        <>
            <div className="top-container">
                <div className="back-button"
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} 
                        className="back-icon"
                    />
                    <p className="back-text">Back</p>
                </div>

                <h3 className="top-title">Individual Transaction</h3>
            </div>

            <form onSubmit={onSubmit}
                className="existing-form">

                <p className="form-title">Update Expense</p>

                <div className="existing-input-container grid">
                    <label htmlFor='name'
                        className="existing-label"
                    >Expense</label>
                    <input
                        required='required'
                        type='text'
                        className="existing-input"
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>

                <div className="existing-input-container grid">
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='text'
                        className="existing-input"
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>

                <div className="existing-input-container grid">
                    <label htmlFor='type'>Category</label>
                    <select
                        required='required'
                        type='text'
                        className="existing-input"
                        id='type'
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    >
                        <option value="">Select a category</option>
                        <option value="Housing">Housing</option>
                        <option value="Personal">Personal</option>
                        <option value="Subscription">Subscription</option>
                        <option value="Food">Food</option>
                    </select>
                </div>

                <div className="existing-button-container">
                    <button type='submit' 
                        className="existing-button">
                        Save
                    </button>
                    <button type="button"
                        className="existing-button delete"
                        onClick={handleDelete}>
                        Delete
                    </button>
                    <button type="button" 
                        className="existing-button exit"
                        onClick={() => navigate(-1)}>
                        Exit
                    </button>
                </div>
            </form>
        </>

    )
}