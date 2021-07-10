import React, { useState } from "react";
import "./form-styles.scss";

const SavingsForm = () => {
    const [data, setData] = useState({
        startingAmount: 0,
        contribution: 0,
        compound: "monthly",
        returnRate: 0,
        savingsPeriod: 0
    })
    const [endBalance, setEndBalance] = useState(0);

    const handleChange = event => {
        const {name, value} = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const calcEndSavingsBalance = (event) => {
        event.preventDefault();

        if (data.compound === "monthly") {
            console.log("Monthlyyy");
            /* Monthly Compound
            P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 12. t = 10.
            Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
            Total = [ 5000 (1 + 0.05 / 12) ^ (12 × 10) ] + [ 100 × (((1 + 0.00416)^(12 × 10) - 1) / (0.00416)) × (1 + 0.05 / 12) ]
            */
        } else if (data.compound === "yearly") {
            console.log("Yearlyyy");
            /* Yearly Compound
            P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 1. t = 10.
            Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
            Total = [ 5000 (1 + 0.05 / 1) ^ (1 × 10) ] + [ 100 × (((1 + 0.00416)^(1 × 10) - 1) / (0.00416)) * (1 + 0.05 / 1) ]
            */
        }
    }

    return (
        <div>
            <form className="savings-form">
                <label htmlFor="starting-amount">Starting Amount</label>
                <input 
                    type="number" 
                    name="startingAmount" 
                    id="starting-amount" 
                    value={data.startingAmount} 
                    onChange={handleChange} 
                />

                <label htmlFor="regular-contribution">Regular Contribution</label>
                <input 
                    type="number" 
                    name="contribution"
                    id="regular-contribution"
                    value={data.contribution}
                    onChange={handleChange}
                />

                <label htmlFor="compound">Compound</label>
                <select 
                    name="compound" 
                    id="compound"
                    value={data.compound}
                    onChange={handleChange}
                >
                    <option value="monthly">monthly</option>
                    <option value="yearly">yearly</option>
                </select>

                <label htmlFor="return-rate">Return Rate</label>
                <input 
                    type="number" 
                    name="returnRate"
                    id="return-rate"
                    value={data.returnRate}
                    onChange={handleChange}
                />

                <label htmlFor="savings-period">Savings Period</label>
                <input 
                    type="number"
                    name="savingsPeriod" 
                    id="savings-period" 
                    value={data.savingsPeriod}
                    onChange={handleChange} 
                />

                <button onClick={calcEndSavingsBalance}>Calculate</button>
            </form>

            <h3>End Balance: {endBalance}</h3>
            <p>Starting Amount: {data.startingAmount}</p>
            <p>Starting Amount: {data.contribution}</p>
            <p>Starting Amount: {data.compound}</p>
            <p>Starting Amount: {data.returnRate}</p>
            <p>Starting Amount: {data.savingsPeriod}</p>
        </div>
    )
}

export default SavingsForm;