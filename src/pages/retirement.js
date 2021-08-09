import React from "react";
import RetirementSavings from "../components/forms/Retirement-savings-form";
import RetirementSavingsLastFor from "../components/forms/Retirement-savings-last-form";

const RetirementCalculators = () => {
    return (
        <div>
            <RetirementSavings />
            <br />
            <RetirementSavingsLastFor />
        </div>
    )
}

export default RetirementCalculators;