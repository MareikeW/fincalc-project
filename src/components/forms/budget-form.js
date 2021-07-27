import React, {useState} from "react";
import BudgetChart from "../charts/BudgetChart";

const BudgetForm = () => {
    const [budgetData, setBudgetData] = useState({
        income: "",
        saving: "",
        housing: "",
        utilities: "",
        food: "",
        transportation: "",
        clothing: "",
        misc: "",
        personal: "",
        recreation: "",
        charity: "",
        debt: ""
    });

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [difference, setDifference] = useState(0);

    const handleChange = event => {
        setIsButtonClicked(false);

        const {name, value} = event.target;
        setBudgetData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    const calcBudget = (event) => {
        event.preventDefault();

        let totalIncome = Number(budgetData.income);
        let totalExpenses = Number(budgetData.saving) + Number(budgetData.housing) + Number(budgetData.utilities) + Number(budgetData.food) +
                            Number(budgetData.transportation) + Number(budgetData.clothing) + Number(budgetData.misc) + Number(budgetData.personal) +
                            Number(budgetData.recreation) + Number(budgetData.charity) + Number(budgetData.debt);
        
        setDifference(totalIncome - totalExpenses);

        setIsButtonClicked(true);
    }

    return (
        <div>
            <form onSubmit={calcBudget}>
                {difference >= 1 ? difference : null}
                <br />
                <label htmlFor="income">Income</label>
                <input 
                    id="income" 
                    name="income" 
                    type="number" 
                    placeholder="What's your income?" 
                    value={budgetData.income}
                    onChange={handleChange}
                />

                <label htmlFor="saving">Savings</label>
                <input 
                    id="saving" 
                    name="saving" 
                    type="number" 
                    placeholder="How much do you want to save?" 
                    value={budgetData.saving}
                    onChange={handleChange}
                />

                <label htmlFor="housing">Housing</label>
                <input 
                    id="housing" 
                    name="housing" 
                    type="number" 
                    placeholder="How much for housing?" 
                    value={budgetData.housing}
                    onChange={handleChange}
                />

                <label htmlFor="utilities">Utilities</label>
                <input 
                    id="utilities" 
                    name="utilities" 
                    type="number" 
                    placeholder="How much for utilities?" 
                    value={budgetData.utilities}
                    onChange={handleChange}
                />

                <label htmlFor="food">Food</label>
                <input 
                    id="food" 
                    name="food" 
                    type="number" 
                    placeholder="How much for food?" 
                    value={budgetData.food}
                    onChange={handleChange}
                />

                <label htmlFor="transportation">Transportation</label>
                <input 
                    id="transportation" 
                    name="transportation" 
                    type="number" 
                    placeholder="How much for transportation?" 
                    value={budgetData.transportation}
                    onChange={handleChange}
                />

                <label htmlFor="clothing">Clothing</label>
                <input 
                    id="clothing" 
                    name="clothing" 
                    type="number" 
                    placeholder="How much for clothing?" 
                    value={budgetData.clothing}
                    onChange={handleChange}
                />

                <label htmlFor="misc">Miscellaneous</label>
                <input 
                    id="misc" 
                    name="misc" 
                    type="number" 
                    placeholder="How much for misc?" 
                    value={budgetData.misc}
                    onChange={handleChange}
                />

                <label htmlFor="personal">Personal</label>
                <input 
                    id="personal" 
                    name="personal" 
                    type="number" 
                    placeholder="How much for personal?" 
                    value={budgetData.personal}
                    onChange={handleChange}
                />

                <label htmlFor="recreation">Recreation</label>
                <input 
                    id="recreation" 
                    name="recreation" 
                    type="number" 
                    placeholder="How much for recreation?" 
                    value={budgetData.recreation}
                    onChange={handleChange}
                />

                <label htmlFor="charity">Charity</label>
                <input 
                    id="charity" 
                    name="charity" 
                    type="number" 
                    placeholder="How much for charity?" 
                    value={budgetData.charity}
                    onChange={handleChange}
                />

                <label htmlFor="debt">Debt</label>
                <input 
                    id="debt" 
                    name="debt" 
                    type="number" 
                    placeholder="How much to pay off debt?" 
                    value={budgetData.debt}
                    onChange={handleChange}
                />

                <button type="submit">Calculate</button>
            </form>

            {!isButtonClicked ? null : difference >= 1 ? <p>Difference: {difference} - You can allocate some more money!</p> : <p>Difference: {difference} - You successfully allocated all your money!</p>}
        
            {isButtonClicked ? <BudgetChart budgetData={budgetData}/> : null}
        </div>
    )
}

export default BudgetForm;