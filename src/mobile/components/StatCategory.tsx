import styled from "styled-components";

const StatCategory = () => {
  return (
    <Main>
      <div className="single-stats">
        <h1>Expenses</h1>
      </div>
      <div className="single-stats">
        <h1>Income</h1>
      </div>
      <div className="single-stats">
        <h1>Comparison</h1>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 10px;
  padding: 1rem 0rem;

  width: 100%;

  .single-stats {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.8rem 0rem;

    border-radius: 15px;

    width: 100%;

    h1 {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 600;
    }
  }
  .single-stats:first-child {
    background: #b4c5ff;
  }
`;

export default StatCategory;
