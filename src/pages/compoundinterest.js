import React from "react";
import CompoundInterestCalculator from "../components/forms/CompoundInterestForm";
import NavBar from "../components/NavBar";

const CompoundInterest = () => {
    return (
        <div>
            <NavBar/>
            <h1>Compound Interest Calculator</h1>
            <CompoundInterestCalculator />
        </div>
    )
}

export default CompoundInterest;