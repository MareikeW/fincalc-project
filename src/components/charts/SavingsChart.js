import React from "react";
import { Line } from 'react-chartjs-2';
import "./charts-styles.scss";


const SavingsChart = ({years, endBalanceArray}) => {
    const data = {
        labels: [],
        datasets: [
          {
            label: 'Yearly Endbalance',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

      for (let i = 0; i < years.length; i++) {
          data.labels.push(
              years[i]
          )
          data.datasets[0].data.push(
              endBalanceArray[i]
          )
      }
      
      const options = {
        scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true,
                  /* this is correct in Vanilla JS chart.js
                    callback: function(value) {
                        return value.toLocaleString("en-US", {style: "currency", currency: "USD"})
                    }
                */
                // Apparently, something is wrong with this
                  callback: function(value, index, values) {
                    return value.toLocaleString("en-US", {style: "currency", currency: "USD"});
                  }
                },
            }],
          },
          responsive: true,
          maintainAspectRatio: false
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
export default SavingsChart;