import styled from "styled-components";
import SingleTransaction from "./SingleTransaction";

const TransactionHistory = () => {
  return (
    <Main>
      <div className="transaction-header">
        <h1>Transaction History</h1>
        <h3>Add New</h3>
      </div>
      <div className="transaction-container">
        <SingleTransaction header="Header" text="Text" price="$100" />
        <SingleTransaction header="Header" text="Text" price="$100" />
        <SingleTransaction header="Header" text="Text" price="$100" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 25%;
  height: 100%;

  background: ${(props) => props.theme.Dcolors.contrast};
  padding: 1rem;
  border-radius: 20px;

  .transaction-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 1rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }
    h3 {
      font-weight: 600;
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }

  .transaction-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    .single-transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      .transaction-text {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.2rem;
      }
    }
  }
`;

export default TransactionHistory;
