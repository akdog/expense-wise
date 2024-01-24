import styled from "styled-components";

const TransactionHistory = () => {
  return (
    <Main>
      <div className="transaction-header">
        <h1>Transaction History</h1>
        <h3>Add New</h3>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 25%;
  height: 100%;

  .transaction-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default TransactionHistory;
