import styled from "styled-components";

//Import Components
import Sidebar from "../components/Sidebar";
import TransferDashboard from "../components/TransferDashboard";

const TransferPage = () => {
  return (
    <Main>
      <Sidebar />
      <TransferDashboard />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default TransferPage;
