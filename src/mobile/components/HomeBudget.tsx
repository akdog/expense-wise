import styled from "styled-components";
import { FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const HomeBudget = () => {
  const state = useSelector((state: RootState) => state.income);
  const stateExpense = useSelector((state: RootState) => state.transaction);

  const expenseData = stateExpense.transaction;

  // Calculate total spent and percentage spent
  const totalSpent = expenseData.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const percentageSpent: number = (totalSpent / state.monthlyBudget) * 100;
  const remainingBudget = state.monthlyBudget - totalSpent;
  const leftBudget: number = 100 - parseInt(percentageSpent.toFixed(0), 10);

  return (
    <Main>
      <h1 id="main-header">Analytics</h1>
      <div className="budget-inside">
        <div className="icon-container">
          <FaMoneyBillWave size="30" />
        </div>
        <div className="text-container">
          <div className="text-header">
            <h1>Monthly Budget</h1>
            <h1>{state.monthlyBudget}$</h1>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={percentageSpent}
            readOnly
            style={{ width: "100%", marginTop: "0.5rem" }}
          />
          <div className="spend-container">
            <h1>
              Spend {totalSpent}$ {percentageSpent.toFixed(0)}%
            </h1>
            <h1>
              Left {remainingBudget}$ {leftBudget}%
            </h1>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  margin-top: 2rem;

  #main-header {
    font-size: 1.4rem;
  }

  .budget-inside {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1rem;
    margin-top: 1rem;

    background: #ececec;
    border-radius: 10px;

    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;

      .text-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h1 {
          font-size: 1rem;
        }
      }

      input {
        width: 100%;
        height: 2vh;
        background: ${(props) => props.theme.colors.lightblue};
        border-radius: 10px;
        border: none;
      }

      .spend-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h1 {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default HomeBudget;
