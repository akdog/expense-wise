import styled from "styled-components";

const SavingGoals = () => {
  return (
    <Main>
      <div className="saving-goals-header">
        <div className="saving-header">
          <h1>Saving Goals</h1>
        </div>
        <div className="saving-explanation">
          <h4>Income</h4>
          <h4>Expenses</h4>
          <h4>This Week</h4>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;

  .saving-goals-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .saving-explanation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default SavingGoals;
