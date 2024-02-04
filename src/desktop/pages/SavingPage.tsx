import styled from "styled-components";

//Import Component
import Sidebar from "../components/Sidebar";
import Savings from "../components/Savings";

const SavingPage = () => {
  return (
    <Main>
      <Sidebar />
      <Savings />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;

  display: flex;
`;

export default SavingPage;
