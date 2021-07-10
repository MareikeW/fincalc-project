import React from "react";

const SavingsForm = () => {
    return (
        <form className="savings-form">
            <label htmlFor="starting-amount">Starting Amount</label>
            <input type="number" id="starting-amount" placeholder="1000" />

            <label htmlFor="regular-contribution">Regular Contribution</label>
            <input type="number" id="regular-contribution" placeholder="200" />

            <label htmlFor="compound">Compound</label>
            <select id="compound">
                <option value="monthly">monthly</option>
                <option value="yearly">yearly</option>
            </select>

            <label htmlFor="return-rate">Return Rate</label>
            <input type="number" id="return-rate" placeholder="4" />

            <label htmlFor="savings-period">Savings Period</label>
            <input type="number" id="savings-period" placeholder="10" />

            <button>Calculate</button>
        </form>
    )
}

export default SavingsForm;