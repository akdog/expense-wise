import styled from "styled-components";
import PieChart from "./PieChart";

const TotalExpense = () => {
  return (
    <Main>
      <div className="expense-header">
        <h1>All Expenses</h1>
        <h3>This month</h3>
      </div>
      <div className="expense-main">
        <div className="expense-graph">
          <PieChart />
        </div>
        <div className="expense-info">
          <h3>Shopping</h3>
          <h4>$2000</h4>
        </div>
        <div className="expense-info">
          <h3>Shopping</h3>
          <h4>$2000</h4>
        </div>
        <div className="expense-info">
          <h3>Shopping</h3>
          <h4>$2000</h4>
        </div>
        <div className="expense-info">
          <h3>Shopping</h3>
          <h4>$2000</h4>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 30%;

  background: ${(props) => props.theme.Dcolors.contrast};

  padding: 1rem;
  border-radius: 20px;

  .expense-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

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

  .expense-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    .expense-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }

    .expense-graph {
      width: 100%;
      canvas {
        width: 100%;
      }
    }
  }
`;

export default TotalExpense;
