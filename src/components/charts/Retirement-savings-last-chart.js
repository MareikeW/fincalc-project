import React from "react";
import { Line } from 'react-chartjs-2';
import "./charts-styles.scss";


const RetirementSavingsLastChart = ({years, balance}) => {
    const data = {
        labels: years,
        datasets: [
          {
            label: 'Yearly Endbalance',
            data: balance,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
            y: {
                ticks: {
                  beginAtZero: true,
                  callback: function(value) {
                      let number = value.toLocaleString("en-US", {style: "currency", currency: "USD"});
                      return number;
                    }
                },
                title: {
                  display: true,
                  text: "Endbalance"
                }
            },
            x: {
              title: {
                display: true,
                text: "Years"
              }
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  let number = context.dataset.data[context.dataIndex].toLocaleString("en-US", {style: "currency", currency: "USD"});
                  return number;
                }
              }
            }
          }
      };

      return ( 
        <div className="savings__chart">
            <Line
                data={data} 
                options={options}
            />
        </div>
    );
}
export default RetirementSavingsLastChart;