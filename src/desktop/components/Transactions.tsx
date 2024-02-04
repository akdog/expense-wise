import styled from "styled-components";
import SingleTransaction from "./SingleTransaction";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Transactions = () => {
  const stateTransaction = useSelector(
    (state: RootState) => state.transaction.transaction
  );

  console.log(stateTransaction);

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
