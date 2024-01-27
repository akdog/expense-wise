import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { options } from "./LineGraph";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Food", "Shooping", "Netflix"],
  datasets: [
    {
      label: "$ Amount",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <PolarArea options={options} data={data}></PolarArea>;
};

export default PieChart;
