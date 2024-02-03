import styled from "styled-components";

const UpPayment = () => {
  return (
    <Main>
      <div className="payment-header">
        <h2>Upcomming Payments</h2>
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
  width: 20%;
  height: 30vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .payment-header {
    text-align: center;

    width: 100%;

    h2 {
      font-size: 1.4rem;
    }

    margin-bottom: 1rem;
  }

  .payment-main {
    background: red;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    border-radius: 20px;
  }
`;

export default UpPayment;
