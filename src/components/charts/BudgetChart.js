import React from "react";
import { Doughnut } from 'react-chartjs-2';
import "./charts-styles.scss";

const BudgetChart = ({budgetData}) => {
    const {saving, housing, utilities, food, transportation, clothing, misc, personal, recreation, charity, debt} = budgetData;

    const data = {
        labels: ['Savings', 'Housing', 'Utilities', 'Food', 'Transportation', 'Clothing', 'Miscellaneous', 
                'Personal', 'Recreation', 'Charity', 'Debt'],
        datasets: [
          {
            label: '# of Budget',
            data: [Number(saving), Number(housing), Number(utilities), Number(food), Number(transportation), 
                Number(clothing), Number(misc), Number(personal), Number(recreation), Number(charity), Number(debt)],
            backgroundColor: [
              '#FF0000',
              '#FFFF00',
              '#CC0066',
              '#6666FF',
              '#660066',
              '#CCFF99',
              '#CCFFE5',
              '#FFFFFF',
              '#FF9999',
              '#000000',
              '#33FFFF',
              '#CCCCFF',
              '#404040',
            ],
            borderColor: [
              '#FF0000',
              '#FFFF00',
              '#CC0066',
              '#6666FF',
              '#660066',
              '#CCFF99',
              '#CCFFE5',
              '#FFFFFF',
              '#FF9999',
              '#000000',
              '#33FFFF',
              '#CCCCFF',
              '#404040',
            ],
            borderWidth: 1,
          },
        ],
    };

    const options = {
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                let number = context.dataset.data[context.dataIndex].toLocaleString("en-US", {style: "currency", currency: "USD"});
                let budgetItem = context.label;
                return `${budgetItem}: ${number}`
              }
            }
          }
        }
    }


    return (
        <div className="budget__chart">
            <Doughnut 
                data={data}
                options={options}
            /> 
        </div>
    )
}

export default BudgetChart;