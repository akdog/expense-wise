import styled from "styled-components";
import RePieCharts from "./RePieCharts";

const StatPie = () => {
  return (
    <Main>
      <RePieCharts />
    </Main>
  );
};

const Main = styled.div`
  width: 50%;
`;

export default StatPie;
