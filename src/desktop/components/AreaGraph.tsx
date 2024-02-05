import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: { name: string; uv: number }[];
};

const AreaGraph = ({ data }: Props) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`Title: ${dataPoint.name}`}</p>
          <p>{`Amount: $${dataPoint.uv}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 5,
          left: 5,
          bottom: 0,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
