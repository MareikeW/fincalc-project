import React from "react";
import BudgetForm from "../components/forms/budget-form";
import NavBar from "../components/NavBar";

const Budget = () => {
    return (
        <div>
            <NavBar/>
            <h1 style={{textAlign:"center"}}>Budget Planner</h1>
            <BudgetForm />
        </div>
    )
}

export default Budget;