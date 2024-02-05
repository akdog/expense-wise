import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieGraph = () => {
  // Get saving data from the Redux store
  const savingData = useSelector((state: RootState) => state.savings.goals);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="amount" // Assuming your saving data has an 'amount' property
            data={savingData}
            fill="#8884d8"
            label
          >
            {savingData.map((entry, index) => (
              <Legend
                key={`legend-${index}`}
                iconType="circle"
                payload={[
                  { color: COLORS[index % COLORS.length], value: entry.name },
                ]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
