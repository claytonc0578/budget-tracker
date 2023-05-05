import React, {useContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "./context/BudgetContext";
import "../styles/AddExpenseForm.css"

export default function AddExpenseForm(props) {
    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [type, setType] = useState('');

    function onSubmit(event) {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name.charAt(0).toUpperCase() + name.slice(1),
            cost: parseFloat(cost),
            type: type,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('')
        setCost('')
        setType('')
        props.toggleAddExpense()
    }

    function handleExit() {
        setName('')
        setCost('')
        setType('')
        props.toggleAddExpense()
    }

    return (
        <>
            <div className="form-background"
                onClick={props.toggleAddExpense}
            >
            </div>

            <form onSubmit={onSubmit}>

                <p className="form-title">Add Expense</p>

                <div className="input-container grid">
                    <label htmlFor='name'>Expense</label>
                    <input
                        required='required'
                        type='text'
                        className="form-control"
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>

                <div className="input-container grid">
                    <label htmlFor='cost'>Cost</label>
                    <input
                        required='required'
                        type='text'
                        className="form-control"
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>

                <div className="input-container grid">
                    <label htmlFor='type'>Category</label>
                    <select
                        required='required'
                        type='text'
                        className="form-control"
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

                <div className="submit-container">
                    <button type='submit' className="submit-button">
                        Save
                    </button>
                    <button type='button'
                    className="submit-button exit"
                    onClick={handleExit}
                    >
                        Exit
                    </button>
                </div>
            </form>
        </>

    )
}