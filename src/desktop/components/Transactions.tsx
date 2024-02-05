import styled from "styled-components";
import { Link } from "react-router-dom";

//Import Component
import SingleTransaction from "./SingleTransaction";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Transactions = () => {
  const stateTransaction = useSelector(
    (state: RootState) => state.transaction.transaction
  );

  if (stateTransaction.length <= 1) {
    return (
      <NoTransactions>
        <h1>No Transactions Yet</h1>
        <Link to="/transfer">Add Transaction</Link>
      </NoTransactions>
    );
  }

  return (
    <Main>
      <div className="transactions-header">
        <h1>Transaction</h1>
      </div>
      {stateTransaction.map((item) => (
        <>
          <SingleTransaction
            info={item.info}
            note={item.note}
            amount={item.amount}
            key={item.amount}
          />
          <hr />
        </>
      ))}
    </Main>
  );
};

const NoTransactions = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  a {
    margin-top: 20px;
    padding: 15px 30px;

    background-color: #3498db;
    color: #fff;

    border: none;
    border-radius: 5px;

    font-size: 20px;
    cursor: pointer;

    width: 70%;

    text-align: center;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  hr {
    width: 100%;
  }
`;

export default Transactions;
