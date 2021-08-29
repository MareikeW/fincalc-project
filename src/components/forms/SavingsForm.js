import React, { useEffect, useState } from "react";
import "./form-styles.scss";
import SavingsChart from "../charts/SavingsChart";
import SavingsTable from "../tables/SavingsTable";

const SavingsForm = () => {
    const [data, setData] = useState({
        startingAmount: 0,
        contribution: 0,
        compound: "monthly",
        returnRate: 0,
        savingsPeriod: 0
    });

    const [yearlyEndBalances, setYearlyEndBalances] = useState([]);
    const [yearlyStartingBalances, setYearlyStartingBalances] = useState([]);
    const [years, setYears] = useState([]);
    const [interests, setInterests] = useState([]);
    const [contributions, setContributions] = useState([]);

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleChange = event => {
        setIsButtonClicked(false);

        const {name, value} = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    useEffect(() => {
        let yearlyInterestsArray = [];

        yearlyInterestsArray = yearlyEndBalances.map((currentValue, index) => {
            return currentValue - contributions[index] - yearlyStartingBalances[index]
        })

        setInterests(yearlyInterestsArray);

        yearlyInterestsArray.length > 0 ? setIsButtonClicked(true) : setIsButtonClicked(false)

    }, [contributions, yearlyStartingBalances, yearlyEndBalances]);


    function calcStartingBalances(yearlyEndBalanceArray) {
        let yearlyStartingBalancesArray = [];
        
        // currentValue has to be declared otherwise it returns "undefined".
        yearlyStartingBalancesArray = yearlyEndBalanceArray.map((currentValue, index, array) => {
            return index === 0 ? Number(data.startingAmount) : array[index - 1];
        })

        setYearlyStartingBalances(yearlyStartingBalancesArray);
    }


    const calcResult = (event) => {
        event.preventDefault();
        
        let yearlyEndBalanceArray = [];
        let yearsArray = [];
        let yearlyContributionsArray = [];

        if (data.compound === "monthly") {
            /* Monthly Compound
            P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 12. t = 10.
            Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
            */
            for (let i = 1; i <= data.savingsPeriod; i++) {
                yearsArray.push(i);
                yearlyContributionsArray.push(12 * data.contribution);
                yearlyEndBalanceArray.push((data.startingAmount * ((1 + ((data.returnRate / 100) / 12))**(12 * i))) + data.contribution * (((1 + ((data.returnRate / 100) / 12))**(12 * i) - 1) / ((data.returnRate / 100) / 12)));    
            }  
        } else if (data.compound === "yearly") {
            /* Yearly Compound */
            for (let i = 1; i <= data.savingsPeriod; i++) {
                yearsArray.push(i);
                yearlyContributionsArray.push(12 * data.contribution);
                yearlyEndBalanceArray.push((data.startingAmount * ((1 + (data.returnRate / 100))**i)) + data.contribution * ((((1 + (data.returnRate / 100))**i) - 1) / ((data.returnRate / 100) / 12)));
            }
        }

        calcStartingBalances(yearlyEndBalanceArray);

        setYears(yearsArray)
        setContributions(yearlyContributionsArray);
        setYearlyEndBalances(yearlyEndBalanceArray);

        
    }

    return (
        <div>
            <form className="calculator-container" onSubmit={calcResult}>
                <div>
                    <label htmlFor="starting-amount">Starting Amount</label>
                    <input 
                        type="number" 
                        name="startingAmount" 
                        id="starting-amount" 
                        value={data.startingAmount} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="regular-contribution">Regular Monthly Contribution</label>
                    <input 
                        type="number" 
                        name="contribution"
                        id="regular-contribution"
                        value={data.contribution}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
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
                </div>
                <div>
                    <label htmlFor="return-rate">Return Rate</label>
                    <input 
                        type="number" 
                        name="returnRate"
                        id="return-rate"
                        value={data.returnRate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="savings-period">Savings Period</label>
                    <input 
                        type="number"
                        name="savingsPeriod" 
                        id="savings-period" 
                        value={data.savingsPeriod}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>

            
            {isButtonClicked ? <SavingsChart years={years} endBalanceArray={yearlyEndBalances}/> : null}

            {isButtonClicked ? <SavingsTable years={years} yearlyStartingBalances={yearlyStartingBalances} yearlyEndBalances={yearlyEndBalances} contribution={contributions} interests={interests} /> : null}
        </div>
    )
}

export default SavingsForm;