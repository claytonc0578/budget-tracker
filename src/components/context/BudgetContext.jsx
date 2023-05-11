import { createContext, useReducer } from "react";
import initialTransactions from "../../assets/initialTransactions.js"

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'UPDATE_EXPENSE':
            // check if expense.id exists, and replace
            // if expense.id does not exist, add new expense
            const updatedExpenses = state.expenses.map(expense => {
                if (expense.id === action.payload.id) {
                    return action.payload;
                }
                return expense;
            });
            return {
                ...state,
                expenses: updatedExpenses,
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            }
        case 'UPDATE_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };         
        default:
            return state
    }
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialTransactions)

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>    
    )
}
