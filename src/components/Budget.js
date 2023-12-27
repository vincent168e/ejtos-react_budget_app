import React, { useContext, useState } from 'react';
import ExpenseTotal from './ExpenseTotal';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (newBudget > 20000) {
            alert("Budget should not exceed 20000.");
            setNewBudget(budget);
            return;
        } else if (newBudget < totalExpenses) {
            alert("Budget should not less than total expenses.");
            setNewBudget(budget);
            return;
        } else
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
