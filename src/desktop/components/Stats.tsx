import styled from "styled-components";

//Import Component
import AreaGraph from "./AreaGraph";
import StackedGraph from "./StackedGraph";

const Stats = () => {
  return (
    <Main>
      <h1>Statistics</h1>
      <div className="top-container">
        <div className="income-container">
          <div className="income-header">
            <h1>Income</h1>
            <h2>$1.2000</h2>
          </div>
          <AreaGraph />
        </div>
        <div className="expense-container">
          <div className="expense-header">
            <h1>Expense</h1>
            <h2>$1.2000</h2>
          </div>
          <AreaGraph />
        </div>
      </div>
      <div className="bottom-container">
        <div className="saving-container">
          <h1>Saving</h1>
        </div>
        <div className="total-container">
          <div className="total-header">
            <h1>Total</h1>
            <h2>$1.2000</h2>
          </div>
          <StackedGraph />
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
      padding: 0.5rem;
      height: 30vh;
      width: 100%;
      border-radius: 20px;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      .income-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        h1 {
          color: white;
          font-size: 1.5rem;
          font-weight: 500;
        }
        h2 {
          color: white;
        }
      }
    }
    .expense-container {
      background: linear-gradient(to right, #285495, #7f2c9c);

      padding: 0.5rem;
      height: 30vh;
      width: 100%;
      border-radius: 20px;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      .expense-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        h1 {
          color: white;
          font-size: 1.5rem;
          font-weight: 500;
        }
        h2 {
          color: white;
        }
      }
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

      .total-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        h1 {
          color: white;
          font-size: 1.5rem;
          font-weight: 500;
        }
        h2 {
          color: white;
        }
      }
    }
  }
`;

export default Stats;
