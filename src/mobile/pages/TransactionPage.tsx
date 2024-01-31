import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";
import TransactionsView from "../components/TransactionsView";
import TransactionHeader from "../components/TransactionHeader";
import TransactionModal from "../components/TransactionModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const TransactionPage = () => {
  const [isModal, setIsModal] = useState(false);

  const state = useSelector((state: RootState) => state.transaction);
  console.log(state.iconType);

  return (
    <Main>
      <PageHeader title="Transaction" action="Save" />
      <TransactionHeader />
      <TransactionsView setIsModal={setIsModal} isModal={isModal} />
      {isModal ? (
        <TransactionModal setIsModal={setIsModal} isModal={isModal} />
      ) : (
        ""
      )}
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
