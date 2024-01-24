import styled from "styled-components";

const TotalExpense = () => {
  return (
    <Main>
      <div className="expense-header">
        <h3>All Expense</h3>
        <h4>This month</h4>
      </div>
      <div className="expense-main">
        <div className="expense-graph">
          <h2>Graph</h2>
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

  width: 20%;

  .expense-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
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
  }
`;

export default TotalExpense;
