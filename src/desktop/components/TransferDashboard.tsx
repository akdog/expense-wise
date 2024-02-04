import styled from "styled-components";

//Import Components
import Header from "./Header";
import TransferDetails from "./TransferDetails";

const TransferDashboard = () => {
  return (
    <Main>
      <Header />
      <TransferDetails />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export default TransferDashboard;
