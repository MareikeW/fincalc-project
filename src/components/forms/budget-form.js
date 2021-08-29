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
            <div className="budget-container"> 
            <form onSubmit={calcBudget}>
            <div className="table-container">
                <table>
                    <tr>
                        <td>
                        <label htmlFor="income">Income</label>
                        </td>
                        <td>
                            <input 
                            id="income" 
                            name="income" 
                            type="number" 
                            placeholder="What's your income?" 
                            value={budgetData.income}
                            onChange={handleChange}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="saving">Savings</label>
                        </td>
                        <td>
                            <input 
                        id="saving" 
                        name="saving" 
                        type="number" 
                        placeholder="How much do you want to save?" 
                        value={budgetData.saving}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="housing">Housing</label>
                        </td>
                        <td>
                        <input 
                        id="housing" 
                        name="housing" 
                        type="number" 
                        placeholder="How much for housing?" 
                        value={budgetData.housing}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="utilities">Utilities</label>
                        </td>
                        <td>
                        <input 
                        id="utilities" 
                        name="utilities" 
                        type="number" 
                        placeholder="How much for utilities?" 
                        value={budgetData.utilities}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="food">Food</label>
                        </td>
                        <td>
                        <input 
                        id="food" 
                        name="food" 
                        type="number" 
                        placeholder="How much for food?" 
                        value={budgetData.food}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="transportation">Transportation</label>
                        </td>
                        <td>
                        <input 
                        id="transportation" 
                        name="transportation" 
                        type="number" 
                        placeholder="How much for transportation?" 
                        value={budgetData.transportation}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>   
                        <label htmlFor="clothing">Clothing</label>
                        </td>
                        <td>
                        <input 
                        id="clothing" 
                        name="clothing" 
                        type="number" 
                        placeholder="How much for clothing?" 
                        value={budgetData.clothing}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="misc">Miscellaneous</label>
                        </td>
                        <td>
                        <input 
                        id="misc" 
                        name="misc" 
                        type="number" 
                        placeholder="How much for misc?" 
                        value={budgetData.misc}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="personal">Personal</label>
                        </td>
                        <td>
                        <input 
                        id="personal" 
                        name="personal" 
                        type="number" 
                        placeholder="How much for personal?" 
                        value={budgetData.personal}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="recreation">Recreation</label>
                        </td>
                        <td>
                        <input 
                        id="recreation" 
                        name="recreation" 
                        type="number" 
                        placeholder="How much for recreation?" 
                        value={budgetData.recreation}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="charity">Charity</label>
                        </td>
                        <td>
                        <input 
                        id="charity" 
                        name="charity" 
                        type="number" 
                        placeholder="How much for charity?" 
                        value={budgetData.charity}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label htmlFor="debt">Debt</label>
                        </td>
                        <td>
                        <input 
                        id="debt" 
                        name="debt" 
                        type="number" 
                        placeholder="How much to pay off debt?" 
                        value={budgetData.debt}
                        onChange={handleChange}
                    />
                        </td>
                    </tr>
                </table>
                <button type="submit">Calculate</button>
            </div>
            </form>
            

            {!isButtonClicked ? null : difference >= 1 ? <p>Difference: {difference} - You can allocate some more money!</p> : <p>Difference: {difference} - You successfully allocated all your money!</p>}
        
            {isButtonClicked ? <BudgetChart budgetData={budgetData}/> : null}
        </div>
        </div>
    )
}

export default BudgetForm;