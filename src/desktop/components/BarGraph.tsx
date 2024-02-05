import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  data: { name: string; uv: number; pv: number; amt: number }[];
};

const BarGraph = ({ data }: Props) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`Pay To: ${dataPoint.name}`}</p>
          <p>{`Amount: $${dataPoint.uv}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="amt" fill="#8884d8" />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
