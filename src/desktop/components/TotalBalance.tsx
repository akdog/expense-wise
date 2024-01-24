import styled from "styled-components";

const TotalBalance = () => {
  return (
    <Main>
      <div className="total-balance-header">
        <div className="balance-header">
          <h1>Total Balance</h1>
        </div>
        <div className="balance-explanation">
          <h4>Income</h4>
          <h4>Expenses</h4>
          <h4>This Week</h4>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 100%;

  .total-balance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .balance-explanation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default TotalBalance;
