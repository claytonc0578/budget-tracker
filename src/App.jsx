import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import BudgetTracker from './components/BudgetTracker/BudgetTracker'
import Layout from './components/Layout'
import Empty from './components/Empty'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<BudgetTracker />} />
                    <Route path='/empty' element={<Empty />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
