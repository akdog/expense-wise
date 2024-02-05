import styled from "styled-components";
import AreaGraph from "./AreaGraph";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const ExpenseStats = () => {
  const stateTransaction = useSelector((state: RootState) => state.transaction);
  const title = stateTransaction.transaction.map((item) => item.info);
  const expenses = stateTransaction.transaction.map((item) => item.amount);

  const expenseData = [
    { name: title[0], uv: expenses[0] },
    { name: title[1], uv: expenses[1] },
    { name: title[2], uv: expenses[2] },
  ];

  const allExpenses = stateTransaction.transaction.reduce(
    (amount, expense) => amount + expense.amount,
    0
  );

  if (allExpenses <= 0) {
    return (
      <NoExpense>
        <div className="expense-header">
          <h1>Expense</h1>
        </div>
        <h2>No Expenses Yet</h2>
      </NoExpense>
    );
  }

  return (
    <Main>
      <div className="expense-header">
        <h1>Expense</h1>
        <h2>$-{allExpenses}</h2>
      </div>
      <AreaGraph data={expenseData} />
    </Main>
  );
};

const NoExpense = styled.div`
  background: linear-gradient(to right, #285495, #7f2c9c);

  padding: 0.5rem;
  height: 30vh;
  width: 100%;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    color: white;
  }

  .expense-header {
    h1 {
      color: white;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

const Main = styled.div`
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
`;

export default ExpenseStats;
