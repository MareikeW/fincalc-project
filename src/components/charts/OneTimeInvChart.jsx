import React from "react";
import { Pie } from "react-chartjs-2";

const OneTimeInvChart = ({ calculate, investmentAmount }) => {
  const data = {
    labels: ["Est.Returns", "Invested Amount"],
    datasets: [
      {
        data: [investmentAmount, investmentAmount],
        backgroundColor: ["#5367FF", "#00D09C"],
        borderWidth: 3,
      },
    ],
  };

  return <Pie data={data} />;
};

export default OneTimeInvChart;
