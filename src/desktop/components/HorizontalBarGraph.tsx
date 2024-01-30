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
      backgroundColor: "#0057C2",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      barThickness: 15,
    },
  ],
};

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const HorizontalBarGraph = () => {
  return (
    <div>
      <Bar options={options} data={data}></Bar>
    </div>
  );
};

export default HorizontalBarGraph;
