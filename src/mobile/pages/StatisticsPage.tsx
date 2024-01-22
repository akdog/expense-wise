import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";
import StatCategory from "../components/StatCategory";
import StatPie from "../components/StatPie";
import StatDetails from "../components/StatDetails";

const StatisticsPage = () => {
  return (
    <Main>
      <PageHeader title="Statistics" />
      <StatCategory />
      <StatPie />
      <StatDetails />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 100vh;

  padding: 1rem;
`;

export default StatisticsPage;
