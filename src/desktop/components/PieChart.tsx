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
      data: [12, 19, 15],
      backgroundColor: ["#CF3ACC", "#7D4CF6", "#0057C2"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <PolarArea options={options} data={data}></PolarArea>;
};

export default PieChart;
