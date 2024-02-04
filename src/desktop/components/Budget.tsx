import styled from "styled-components";

const Budget = () => {
  return (
    <Main>
      <div className="budget-header">
        <h3>Saved this Month</h3>
        <h2>$25.381.22</h2>
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
  }
`;

export default Budget;
