import styled from "styled-components";

//Import Component
import IncomeStats from "./IncomeStats";
import ExpenseStats from "./ExpenseStats";
import SavingStats from "./SavingStats";
import TotalStats from "./TotalStats";

const Stats = () => {
  return (
    <Main>
      <h1>Statistics</h1>
      <div className="top-container">
        <IncomeStats />
        <ExpenseStats />
      </div>
      <div className="bottom-container">
        <SavingStats />
        <TotalStats />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  width: 90%;
  margin: 0 auto;

  .top-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    width: 100%;
  }
  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export default Stats;
