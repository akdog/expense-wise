import styled from "styled-components";

//Import Components
import HomeStatsHeader from "./HomeStatsHeader";
import HomeStatsMain from "./HomeStatsMain";

const HomeStatistic = () => {
  return (
    <Main>
      <HomeStatsHeader />
      <HomeStatsMain />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  margin-top: 1.5rem;
`;

export default HomeStatistic;
