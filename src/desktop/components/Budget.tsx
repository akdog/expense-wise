import styled from "styled-components";
import BarGraph from "./BarGraph";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Budget = () => {
  const stateBudget = useSelector((state: RootState) => state.income);
  const stateExpense = useSelector((state: RootState) => state.transaction);
  const stateSavings = useSelector((state: RootState) => state.savings);

  const expenseData = stateExpense.transaction;

  // Calculate total spent and percentage spent
  const totalSpent = expenseData.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const savingData = stateSavings.goals;

  const savingSpent = savingData.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalSpendCalc = totalSpent + savingSpent;

  const percentageSpent: number =
    (totalSpendCalc / stateBudget.monthlyBudget) * 100;
  const remainingBudget = stateBudget.monthlyBudget - totalSpendCalc;
  const leftBudget: number = 100 - parseInt(percentageSpent.toFixed(0), 10);

  const transactionData = stateExpense.transaction;

  const formattedData = transactionData.map((transaction) => ({
    name: transaction.info,
    uv: transaction.amount,
    pv: transaction.amount,
    amt: transaction.amount,
  }));

  return (
    <Main>
      <div className="budget-header">
        <h3>Monthly Budget</h3>
        <h2>${stateBudget.monthlyBudget}</h2>
      </div>
      <div className="budget-graph">
        <BarGraph data={formattedData} />
      </div>
      <div className="budget-bottom">
        <div className="single-budget-stats">
          <h3>Monthly Budget Left in %: {leftBudget}%</h3>
        </div>
        <div className="single-budget-stats">
          <h3>Remaining Budget: ${remainingBudget}</h3>
        </div>
        <div className="single-budget-stats">
          <h3>Spent: ${totalSpendCalc}</h3>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  .budget-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    h2 {
      font-size: 2rem;
      font-weight: 500;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }

  .budget-graph {
    width: 100%;
    height: 60%;
  }

  .budget-bottom {
    width: 100%;
    height: 15%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

export default Budget;
