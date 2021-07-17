import React from "react";
import { Line } from 'react-chartjs-2';


const SavingsChart = ({years, endBalanceArray}) => {
    //console.log("endBalances " + endBalanceArray)
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
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
      };
      return ( 
        <>
            <Line data={data} options={options} />
        </>
    );
}
export default SavingsChart;