import styled from "styled-components";

//Import Components
import Payment from "./Payment";
import PaymentCard from "./PaymentCard";

const TransferDetails = () => {
  return (
    <Main>
      <div className="left-container">
        <Payment />
      </div>
      <div className="right-container">
        <PaymentCard />
        <div className="information-container">
          <h1>Information</h1>
        </div>
        <div className="security-container">
          <h1>Security</h1>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 85%;

  margin: 0 auto;

  .left-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    height: 100%;
  }
  .right-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    .information-container {
      width: 80%;
      height: 30%;

      padding: 1rem;

      border-radius: 20px;

      background: linear-gradient(to right, #285495, #7f2c9c);

      h1 {
        color: white;
      }
    }
    .security-container {
      width: 80%;
      height: 30%;

      padding: 1rem;

      border-radius: 20px;

      background: linear-gradient(to right, #285495, #7f2c9c);

      h1 {
        color: white;
      }
    }
  }
`;

export default TransferDetails;
