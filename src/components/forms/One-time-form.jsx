// Create One Time Investment Form

import React, { useState } from "react";
import OneTimeInvChart from '../charts/OneTimeInvChart'

const Calculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(25000);
  const [expectedPA, setExpectedPA] = useState(15);
  const [tenure, setTenure] = useState(10);
  const [showResult, setShowResult] = useState(false);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    calculate();
    setShowResult(true);
  };

  function calculate() {
    const res = investmentAmount * Math.pow(1 + expectedPA / 100, tenure);
    return +res.toFixed(2);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form__input-group">
          <label htmlFor="amount" className="form__label">
            Investment Amount :{" "}
          </label>
          <input
            type="number"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            id="amount"
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="pa" className="form__label">
            Expected rate of return (max 30%) :{" "}
          </label>
          <input
            type="number"
            value={expectedPA}
            onChange={(e) => setExpectedPA(e.target.value)}
            id="pa"
            className="form__input"
            max={30}
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="tenure" className="form__label">
            Tenure (in years) :{" "}
          </label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            id="tenure"
            className="form__input"
            max={40}
          />
        </div>
        <button type="submit" className="form__btn">
          Calculate
        </button>
      </form>

      {showResult && (
        <>
        <div className="result">
          <p className="result__corpus">Your corpus value : {calculate()}</p>
          <p className="result__earnings">
            Total earnings : {calculate() - investmentAmount}
          </p>
          <p className="result__deposited-amount">
            Total deposited amount : {investmentAmount}
          </p>
        </div>
         <OneTimeInvChart
         calculate={calculate}
         investmentAmount={investmentAmount}
       />
       </>
      )}
    </>
  );
};

export default Calculator;
