import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../state/store";

const PaymentCard = () => {
  const stateIncome = useSelector((state: RootState) => state.income);
  const stateTransaction = useSelector(
    (state: RootState) => state.transaction.transaction
  );

  const expenseData = stateTransaction.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const newIncome = stateIncome.income - expenseData;

  return (
    <Main>
      <div className="card-header">
        <h3>Current Balance</h3>
        <h2>${newIncome}</h2>
      </div>
      <div className="card-details">
        <h2>1234 5678 9012 4512</h2>
        <h3>09/25</h3>
      </div>
    </Main>
  );
};

const Main = styled.div`
  background: linear-gradient(to right, #285495, #7f2c9c);

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  height: 30%;

  padding: 1rem;

  border-radius: 20px;

  .card-header {
    h2 {
      font-size: 1.6rem;
      color: white;
      font-weight: 600;
    }
    h3 {
      font-size: 1rem;
      color: white;
      font-weight: 500;
    }
  }

  .card-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: white;
    }
    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }
  }
`;

export default PaymentCard;
