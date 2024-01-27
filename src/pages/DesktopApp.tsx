import styled from "styled-components";

//Import Components
import Sidebar from "../desktop/components/Sidebar";
import Dashboard from "../desktop/components/Dashboard";

const DesktopApp = () => {
  return (
    <Main>
      <Sidebar />
      <Dashboard />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export default DesktopApp;
