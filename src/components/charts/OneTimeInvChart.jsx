import React from "react"
import { Line } from "react-chartjs-2"
import "./charts-styles.scss"

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

const OneTimeInvChart = ({ endBalance }) => {

  const data = {
    labels: Array.from({ length: endBalance.length }, (_, idx) => idx + 1),
    datasets: [
      {
        label: "# of EndBalance",
        data: endBalance,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="compound__chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default OneTimeInvChart