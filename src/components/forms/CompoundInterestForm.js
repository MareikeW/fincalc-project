import React, { useState, useEffect } from "react";
import OneTimeInvestmentChart from '../charts/OneTimeInvChart'
import CompoundInterestTable from '../tables/CompoundInterestTable'

const CompoundInterestCalculator = () => {
  const [data, setData] = useState({
    startingAmount: 0,
    returnRate: 0,
    investmentPeriod: 0
});

const [yearlyEndBalances, setYearlyEndBalances] = useState([]);
const [yearlyStartingBalances, setYearlyStartingBalances] = useState([]);
const [years, setYears] = useState([]);
const [interests, setInterests] = useState([]);

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
        return currentValue - yearlyStartingBalances[index];
    })

    setInterests(yearlyInterestsArray);
    
    yearlyInterestsArray.length > 0 ? setIsButtonClicked(true) : setIsButtonClicked(false);

}, [yearlyStartingBalances, yearlyEndBalances]);


function calcYearlyStartingBalance(yearlyEndBalanceArray) {
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

    /* Formula: Cnew = C * (1 + (p/100))^n
       Cnew: endbalance
       C: starting balance
       p: interest number e. g. 5
       n: years
    */
   for (let i = 1; i <= data.investmentPeriod; i++) {
     yearsArray.push(i);
     yearlyEndBalanceArray.push(data.startingAmount * ((1 + (data.returnRate / 100))**i));
   }
   
   setYears(yearsArray);
   setYearlyEndBalances(yearlyEndBalanceArray);

   calcYearlyStartingBalance(yearlyEndBalanceArray);
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
                <label htmlFor="investment-period">Investment Period</label>
                <input 
                    type="number"
                    name="investmentPeriod" 
                    id="investment-period" 
                    value={data.investmentPeriod}
                    onChange={handleChange}
                    required 
                />
            </div>
            <button type="submit">Calculate</button>
        </form>
        <div className='wrapper'>
        {isButtonClicked ? <OneTimeInvestmentChart endBalance={yearlyEndBalances} /> : null}
       
        {isButtonClicked ? <CompoundInterestTable 
          startingBalance={yearlyStartingBalances} 
          endBalance={yearlyEndBalances} 
          years={years} 
          interests={interests}
        /> 
        : null}
        </div>
    </div>
  );
};

export default CompoundInterestCalculator;
