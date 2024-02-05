import styled from "styled-components";
import StackedGraph from "./StackedGraph";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const TotalStats = () => {
  const stateIncome = useSelector((state: RootState) => state.income);
  const stateExpense = useSelector((state: RootState) => state.transaction);
  const expenses = stateExpense.transaction.map((item) => item.amount);
  const title = stateExpense.transaction.map((item) => item.info);

  const incomeData = [
    { name: title[0], income: stateIncome.income },
    { name: title[1], income: stateIncome.income - 200 },
    { name: title[2], income: stateIncome.income + 280 },
    { name: title[3], income: stateIncome.income + 330 },
  ];

  const expenseData = [
    { name: title[0], expense: expenses[0] },
    { name: title[1], expense: expenses[1] },
    { name: title[2], expense: expenses[2] },
  ];

  const allExpense = stateExpense.transaction.reduce(
    (number, expense) => number + expense.amount,
    0
  );

  return (
    <Main>
      <div className="total-header">
        <h1>Total</h1>
        <div className="total-detail-header">
          <h2>Income: ${stateIncome.income}</h2>
          <h2> Expenses: ${allExpense}</h2>
        </div>
      </div>
      <StackedGraph incomeData={incomeData} expenseData={expenseData} />
    </Main>
  );
};

const Main = styled.div`
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

    .total-detail-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: white;
    }
    h1 {
      color: white;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

export default TotalStats;
