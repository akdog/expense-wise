import styled from "styled-components";

//Import Components
import PaymentCard from "./PaymentCard";
import TransferHeader from "./TransferHeader";
import TransferForm from "./TransferForm";

const Payment = () => {
  return (
    <Main>
      <PaymentCard />
      <div className="transfer-container">
        <TransferHeader />
        <TransferForm />
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .transfer-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    border-radius: 20px;

    width: 90%;
    margin: 0 auto;
    height: 65%;

    background: linear-gradient(to right, #285495, #7f2c9c);
  }
`;

export default Payment;
