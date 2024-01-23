import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";
import TransactionsView from "../components/TransactionsView";
import TransactionHeader from "../components/TransactionHeader";
import TransactionModal from "../components/TransactionModal";

const TransactionPage = () => {
  return (
    <Main>
      <PageHeader title="Transaction" action="Save" />
      <TransactionHeader />
      <TransactionsView />
      {/* <TransactionModal /> */}
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  height: 100vh;
  padding: 1rem;

  position: relative;
`;

export default TransactionPage;
