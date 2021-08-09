import React, {useState} from "react";

const RetirementSavingsLastFor = () => {
    const [data, setData] = useState({
        savingsAmount: 0,
        savingsPeriod: 0,
        expenses: 0
    });

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [years, setYears] = useState(0);

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

    const calcResult = (event) => {
        event.preventDefault();

        let balance = data.savingsAmount;

        let i = 0;
        while (balance > 0) {
            balance = (balance * (1 + data.returnRate / 100)) - data.expenses;

            if (balance < 0) {
                setYears(i);
                break;  
            }

            i++;
        }
        setIsButtonClicked(true);
    }

    return (
        <div>
            <form onSubmit={calcResult}>
                <div>
                    <label htmlFor="savingsAmount">Savings Amount</label>
                    <input 
                    type="number" 
                    name="savingsAmount" 
                    id="savingsAmount" 
                    value={data.savingsAmount} 
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
                    <label htmlFor="expenses">Expenses</label>
                    <input 
                        type="number" 
                        name="expenses"
                        id="expenses"
                        value={data.expenses}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Calculate</button>
            </form>

            
            {isButtonClicked ? <p>Your savings will last for: {years} years</p> : null}
        </div>
    )
}

export default RetirementSavingsLastFor;