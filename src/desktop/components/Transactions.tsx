import styled from "styled-components";
import SingleTransaction from "./SingleTransaction";

const Transactions = () => {
  return (
    <Main>
      <div className="transactions-header">
        <h1>Transaction</h1>
      </div>
      <SingleTransaction />
      <hr />
      <SingleTransaction />
      <hr />
      <SingleTransaction />
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
