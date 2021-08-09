import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/budgetplanner'}>Budget Planner</Link></li>
                <li><Link to={'/savings-calculator'}>Savings Calculator</Link></li>
                <li><Link to={'/onetime-investment'}>One-time Investment</Link></li>
                <li><Link to={'/retirement-savings'}>Retirement Savings</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;