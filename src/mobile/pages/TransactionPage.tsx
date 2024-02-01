import { useState } from "react";
import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";
import TransactionsView from "../components/TransactionsView";
import TransactionHeader from "../components/TransactionHeader";
import TransactionModal from "../components/TransactionModal";
import { useDispatch, useSelector } from "react-redux";
import { handleTransaction } from "../../state/transaction/transactionSlice";
import { RootState } from "../../state/store";

//Import Reduxt

const TransactionPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.transaction);
  const stateIncome = useSelector((state: RootState) => state.income);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalSpent = state.transaction.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    const remainingBudget = stateIncome.monthlyBudget - totalSpent;

    if (state.category !== "" && remainingBudget >= transactionAmount) {
      const info = state.category;
      dispatch(handleTransaction({ info, amount: transactionAmount, note }));
    } else {
      console.error("Transaction canceled: Not enough budget");
    }
  };

  return (
    <Main onSubmit={handleSubmit}>
      <PageHeader title="Transaction" action="Save" />
      <TransactionHeader
        transactionAmount={transactionAmount}
        setTransactionAmount={setTransactionAmount}
      />
      <TransactionsView
        setIsModal={setIsModal}
        isModal={isModal}
        note={note}
        setNote={setNote}
      />
      {isModal ? (
        <TransactionModal setIsModal={setIsModal} isModal={isModal} />
      ) : (
        ""
      )}
    </Main>
  );
};

const Main = styled.form`
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
