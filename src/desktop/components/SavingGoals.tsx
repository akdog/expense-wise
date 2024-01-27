import styled from "styled-components";
import HorizontalBarGraph from "./HorizontalBarGraph";

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
      <div className="saving-graph">
        <HorizontalBarGraph />
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

  background: ${(props) => props.theme.Dcolors.contrast};
  padding: 1rem;
  border-radius: 20px;

  .saving-goals-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .saving-header {
      h1 {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }

    .saving-explanation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  .saving-graph {
    width: 100%;
  }
`;

export default SavingGoals;
