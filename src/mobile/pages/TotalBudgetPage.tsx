import styled from "styled-components";

//Import Components
import Header from "../components/Header";
import LargeBudget from "../components/LargeBudget";
import CalculatedLimits from "../components/CalculatedLimits";
import Settings from "../components/Settings";

const TotalBudgetPage = () => {
  return (
    <Main>
      <Header text="OK" />
      <LargeBudget />
      <CalculatedLimits />
      <Settings />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  min-height: 100vh;

  padding: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h3 {
      color: ${(props) => props.theme.colors.lightblue};
      font-weight: 600;
    }

    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
    svg {
      width: 5%;
    }
  }
`;

export default TotalBudgetPage;
