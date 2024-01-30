import { AreaChart, Area, Tooltip } from "recharts";
import styled from "styled-components";

const data = [
  { name: "Jan", uv: 0, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 500, pv: 2400, amt: 2400 },
  { name: "Sep", uv: 600, pv: 1398, amt: 2210 },
  { name: "Oct", uv: 700, pv: 9800, amt: 2290 },
  { name: "Nov", uv: 800, pv: 3908, amt: 2000 },
  { name: "Dec", uv: 900, pv: 4800, amt: 2181 },
];

const ReGraph = () => {
  return (
    <AreaChartStyling data={data}>
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" />
    </AreaChartStyling>
  );
};

const AreaChartStyling = styled(AreaChart)`
  width: 100%;
  height: 100%;
`;

export default ReGraph;
