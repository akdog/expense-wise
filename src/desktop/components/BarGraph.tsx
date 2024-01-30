import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Mon", "Tue", "Wed"],
  datasets: [
    {
      label: "January",
      data: [3, 9, 12],
      backgroundColor: "#CF3ACC",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      barThickness: 20,
    },
  ],
};

const options = {};

const BarGraph = () => {
  return (
    <div>
      <Bar options={options} data={data}></Bar>
    </div>
  );
};

export default BarGraph;
