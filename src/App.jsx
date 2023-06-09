import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import BudgetTracker from './components/BudgetTracker';
import Transactions from './components/Transactions';
import { AppProvider } from './components/context/BudgetContext';
import ExistingExpenseForm from './components/ExistingExpenseForm';

function App() {

    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<BudgetTracker />} />
                        <Route path='/transactions' element={<Transactions />} />
                        <Route path='/transaction' element={<ExistingExpenseForm />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App
