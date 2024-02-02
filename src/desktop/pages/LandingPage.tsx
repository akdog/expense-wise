import styled from "styled-components";

//Import Components
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const LandingPage = () => {
  return (
    <Main>
      <Sidebar />
      <Dashboard />
    </Main>
  );
};

const Main = styled.div`
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export default LandingPage;
