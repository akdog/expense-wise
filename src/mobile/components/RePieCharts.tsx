import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const RePieCharts = () => {
  const state = useSelector((state: RootState) => state.transaction);
  const transactionData = state.transaction;

  const dynamicData = {
    labels: transactionData.map((transaction) => transaction.info),
    datasets: [
      {
        label: "$",
        data: transactionData.map((transaction) => transaction.amount),
        backgroundColor: ["#CF3ACC", "#7D4CF6", "#0057C2"], // You may want to add more colors dynamically
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={dynamicData} />;
};

export default RePieCharts;
