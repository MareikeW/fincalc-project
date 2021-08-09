import React from "react";
import RetirementSavings from "../components/forms/Retirement-savings-form";
import RetirementSavingsLastFor from "../components/forms/Retirement-savings-last-form";
import NavBar from "../components/NavBar";

const RetirementCalculators = () => {
    return (
        <div>
            <NavBar/>
            <h1>Retirement Calculators</h1>
            <h2>How much do I need to save to achieve my targeted amount at the beginning of retirement?</h2>
            <RetirementSavings />
            <br />
            <h2>How long will my savings last for in retirement?</h2>
            <RetirementSavingsLastFor />
        </div>
    )
}

export default RetirementCalculators;