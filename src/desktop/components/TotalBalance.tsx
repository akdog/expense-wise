import styled from "styled-components";
import LineGraph from "./LineGraph";

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
      <div className="balance-graph">
        <LineGraph />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 65%;
  height: 100%;

  background: ${(props) => props.theme.Dcolors.contrast};
  border-radius: 20px;
  padding: 1rem;

  .total-balance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .balance-header {
      h1 {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }

    .balance-explanation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  .balance-graph {
    width: 95%;
  }
`;

export default TotalBalance;
