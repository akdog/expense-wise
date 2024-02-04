import styled from "styled-components";

//Import Components
import Sidebar from "../components/Sidebar";
import Statistics from "../components/Statistics";

const StatsPage = () => {
  return (
    <Main>
      <Sidebar />
      <Statistics />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  display: flex;
`;

export default StatsPage;
