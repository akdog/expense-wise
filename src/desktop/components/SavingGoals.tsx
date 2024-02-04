import styled from "styled-components";

const SavingGoals = () => {
  return (
    <Main>
      <div className="payment-header">
        <h2>Saving Goals</h2>
      </div>
      <div className="payment-main">
        <h2>PayPal</h2>
        <h3>Consulting Fees</h3>
        <h4>$100.000</h4>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 55%;
  height: 30vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .payment-header {
    width: 100%;
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
    }
    margin-bottom: 1rem;
  }

  .payment-main {
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
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 1rem;

    padding: 1rem;

    border-radius: 20px;

    h2 {
      color: white;
      font-weight: 500;
      font-size: 1.5rem;
    }
    h3 {
      color: white;
      font-weight: 400;
      font-size: 1.2rem;
    }
    h4 {
      color: white;
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
`;

export default SavingGoals;
