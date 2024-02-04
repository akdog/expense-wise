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
      background-image: linear-gradient(
        to right top,
        #6f6bd1,
        #7371d5,
        #7776da,
        #7c7cde,
        #8082e2,
        #7f86e5,
        #7f89e9,
        #7e8dec,
        #788ff0,
        #7091f4,
        #6894f7,
        #5f96fb
      );

      padding: 1rem;
      height: 30vh;
      width: 100%;
      border-radius: 20px;
    }
    .expense-container {
      background-image: linear-gradient(
        to right top,
        #6f6bd1,
        #7371d5,
        #7776da,
        #7c7cde,
        #8082e2,
        #7f86e5,
        #7f89e9,
        #7e8dec,
        #788ff0,
        #7091f4,
        #6894f7,
        #5f96fb
      );

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
      background-image: linear-gradient(
        to right top,
        #6f6bd1,
        #7371d5,
        #7776da,
        #7c7cde,
        #8082e2,
        #7f86e5,
        #7f89e9,
        #7e8dec,
        #788ff0,
        #7091f4,
        #6894f7,
        #5f96fb
      );

      width: 35%;
      padding: 1rem;
      height: 40vh;
      border-radius: 20px;
    }
    .total-container {
      background-image: linear-gradient(
        to right top,
        #6f6bd1,
        #7371d5,
        #7776da,
        #7c7cde,
        #8082e2,
        #7f86e5,
        #7f89e9,
        #7e8dec,
        #788ff0,
        #7091f4,
        #6894f7,
        #5f96fb
      );

      width: 62%;
      padding: 1rem;
      height: 40vh;
      border-radius: 20px;
    }
  }
`;

export default Stats;
