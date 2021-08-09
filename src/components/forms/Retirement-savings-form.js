// How much do i need to save (both annually and monthly) to achieve my targeted amount at the beginning of retirement ?

import React, { useState } from "react";

const Calculator = () => {
  const [currentCost, setCurrentCost] = useState(0);
  const [inflationRate, setInflationRate] = useState(0);
  const [totalyears, setTotalYears] = useState(0);
  const [savingsReturn, setSavingsReturn] = useState(0);

  const [futureValue, setFutureValue] = useState(0);
  const [res, setRes] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(calcFinalValue());
  };

  function calcFinalValue() {
    const fv = currentCost * Math.pow(1 + inflationRate / 100, totalyears);
    setFutureValue(fv);
    calcRes();
    return fv;
  }

  function calcRes() {
    const deno = Math.pow(savingsReturn / 100 + 1, totalyears) - 1;
    const result = (futureValue / deno) * (savingsReturn / 100);
    setRes(result);
    return result;
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input-group">
          <label htmlFor="current-cost" className="form__label">
            desired amount targeted at retirement
          </label>
          <input
            type="number"
            id="current-cost"
            min={10000}
            value={currentCost}
            onChange={(e) => setCurrentCost(e.target.value)}
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="inflation-rate" className="form__label">
            inflation rate
          </label>
          <input
            type="number"
            id="inflation-rate"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="total-years" className="form__label">
            Total years you have left to save
          </label>
          <input
            type="number"
            min={5}
            max={60}
            id="total-years"
            value={totalyears}
            onChange={(e) => setTotalYears(e.target.value)}
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="savings-return" className="form__label">
            Expected Savings return
          </label>
          <input
            type="number"
            id="savings-return"
            min={1}
            max={90}
            value={savingsReturn}
            onChange={(e) => setSavingsReturn(e.target.value)}
            className="form__input"
          />
        </div>
        <button type="submit" className="form__btn">
          Calculate
        </button>
      </form>
      <p>Current value of your money : {currentCost} </p>
      <p> FutureValue of your money(inflation rate) : {futureValue} </p>.
      <p>
        You need to save {res} annually in order to achieve your targeted
        amount. (including interest from the bank)
      </p>
      <p>Annual Savings Required : {res} </p>
      <p>Monthly Savings Required : {res / 12} </p>
    </div>
  );
};

export default Calculator;
