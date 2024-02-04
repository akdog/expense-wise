import styled from "styled-components";

const PaymentCard = () => {
  return (
    <Main>
      <div className="card-header">
        <h3>Current Balance</h3>
        <h2>$1.200,00</h2>
      </div>
      <div className="card-details">
        <h2>1234 5678 9012 4512</h2>
        <h3>09/25</h3>
      </div>
    </Main>
  );
};

const Main = styled.div`
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
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  height: 30%;

  padding: 1rem;

  border-radius: 20px;

  .card-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export default PaymentCard;
