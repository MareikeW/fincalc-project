import React, { useEffect, useState } from "react";
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
    const [totalContributions, setTotalContributions] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);


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
        let yearlyCompoundedBalance = [];
        let yearlyCompoundedContribution = [];

        if (data.compound === "monthly") {
            /* Monthly Compound
            P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 12. t = 10.
            Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
            Total = [ 5000 (1 + 0.05 / 12) ^ (12 × 10) ] + [ 100 × (((1 + 0.00416)^(12 × 10) - 1) / (0.00416)) × (1 + 0.05 / 12) ]
            */
            for (let i = 1; i <= data.savingsPeriod; i++) {
                yearlyCompoundedBalance.push(data.startingAmount * ((1 + ((data.returnRate / 100) / 12))**(12 * i)));
                yearlyCompoundedContribution.push(data.contribution * (((1 + ((data.returnRate / 100) / 12))**(12 * i) - 1) / ((data.returnRate / 100) / 12)) * (1 + ((data.returnRate / 100) / 12)));
            }
       
            setEndBalance(yearlyCompoundedBalance[yearlyCompoundedBalance.length -1] + yearlyCompoundedContribution[yearlyCompoundedContribution.length - 1]);
            setTotalContributions(Number(data.startingAmount) + (Number(data.contribution * 12) * Number(data.savingsPeriod)));

            
        } else if (data.compound === "yearly") {
            //console.log("Yearlyyy");
            /* Yearly Compound
            P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 1. t = 10.
            Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) × (1+r/n) ]
            Total = [ 5000 (1 + 0.05 / 1) ^ (1 × 10) ] + [ 100 × (((1 + 0.00416)^(1 × 10) - 1) / (0.00416)) * (1 + 0.05 / 1) ]
            */
            
        }
    }

    useEffect(() => {
        setTotalInterest(Number(endBalance) - Number(totalContributions));
    }, [data, totalContributions, endBalance])


    return (
        <div>
            <form className="savings-form" onSubmit={calcEndSavingsBalance}>
                <label htmlFor="starting-amount">Starting Amount</label>
                <input 
                    type="number" 
                    name="startingAmount" 
                    id="starting-amount" 
                    value={data.startingAmount} 
                    onChange={handleChange} 
                />

                <label htmlFor="regular-contribution">Regular Monthly Contribution</label>
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

                <button type="submit">Calculate</button>
            </form>

            <h3>End Balance: {endBalance.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</h3>
            <p>Starting Amount: {data.startingAmount.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</p>
            <p>Monthly Contribution: {data.contribution.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</p>
            <p>Compound: {data.compound}</p>
            <p>Return Rate: {data.returnRate}%</p>
            <p>Savings Period: {data.savingsPeriod}</p>
            <br>
            </br>
            <p>Total Contributions (Starting Amount + Monthly Contributions): {totalContributions.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</p>
            <p>Total Interest: " {totalInterest.toLocaleString("en-GB", {style: "currency", currency: "GBP"})}</p>
        </div>
    )
}

export default SavingsForm;