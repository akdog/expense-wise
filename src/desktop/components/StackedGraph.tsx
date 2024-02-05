// StackedGraph.tsx

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  incomeData: { name: string; income: number }[]; // Modify this based on your income data structure
  expenseData: { name: string; expense: number }[]; // Modify this based on your expense data structure
};

const StackedGraph = ({ incomeData, expenseData }: Props) => {
  const renderCustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: any[];
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`Month: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`tooltip-${index}`}>
              {`${entry.name === "income" ? "Income" : "Paid"} Amount: $${
                entry.value
              }`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={renderCustomTooltip} />
        <Area
          type="monotone"
          dataKey="income"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
          data={incomeData} // Use income data here
        />
        <Area
          type="monotone"
          dataKey="expense"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
          data={expenseData} // Use expense data here
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedGraph;
