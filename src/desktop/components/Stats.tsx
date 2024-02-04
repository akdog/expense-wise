import styled from "styled-components";

const Stats = () => {
  return (
    <Main>
      <h1>Statistics</h1>
      <div className="top-container">
        <div className="income-container">
          <h1>Income</h1>
        </div>
        <div className="expense-container">
          <h1>Expense</h1>
        </div>
      </div>
      <div className="bottom-container">
        <div className="saving-container">
          <h1>Saving</h1>
        </div>
        <div className="total-container">
          <h1>Total</h1>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  width: 90%;
  margin: 0 auto;

  .top-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    width: 100%;

    .income-container {
      background: linear-gradient(to right, #285495, #7f2c9c);

      padding: 1rem;
      height: 30vh;
      width: 100%;
      border-radius: 20px;
    }
    .expense-container {
      background: linear-gradient(to right, #285495, #7f2c9c);

      padding: 1rem;
      height: 30vh;
      width: 100%;
      border-radius: 20px;
    }
  }
  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .saving-container {
      background: linear-gradient(to right, #285495, #7f2c9c);

      width: 35%;
      padding: 1rem;
      height: 40vh;
      border-radius: 20px;
    }
    .total-container {
      background: linear-gradient(to right, #285495, #7f2c9c);

      width: 62%;
      padding: 1rem;
      height: 40vh;
      border-radius: 20px;
    }
  }
`;

export default Stats;
