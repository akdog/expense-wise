import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../state/store";

//Import Redux

const Budget = () => {
  const stateBudget = useSelector((state: RootState) => state.income);

  return (
    <Main>
      <div className="budget-header">
        <h3>Saved this Month</h3>
        <h2>${stateBudget.monthlyBudget}</h2>
      </div>
      <div className="budget-graph">
        <h1>GRAPH</h1>
      </div>
      <div className="budget-bottom">
        <h3>Monthly Budget Saved:</h3>
        <h3>80%</h3>
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
    justify-content: space-around;
    align-items: center;

    h3 {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

export default Budget;
