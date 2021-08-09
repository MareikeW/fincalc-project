import React from "react";
import NavBar from "../components/NavBar";

import SavingsForm from "../components/forms/SavingsForm";

const Savings = () => {
    return (
        <div>
            <NavBar />
            <h1>Savings Calculator</h1>
            <SavingsForm />
        </div>
    )
}

export default Savings;