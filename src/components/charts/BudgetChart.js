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
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(54, 162, 235, 1)',
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