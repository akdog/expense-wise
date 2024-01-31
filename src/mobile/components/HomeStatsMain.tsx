import styled from "styled-components";
import HomeStatsExpend from "./HomeStatsExpend";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const HomeStatsMain = () => {
  const state = useSelector((state: RootState) => state.income);

  return (
    <Main>
      <HomeStatsExpend
        title="Expense"
        amount="-6.800"
        className="expense-container"
        svgID="expense-icon"
        insideClassName="expense"
      />
      <HomeStatsExpend
        title="Income"
        amount={state.income}
        className="income-container"
        svgID="income-icon"
        insideClassName="income"
      />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;

  svg {
    border-radius: 10px;
    width: 12vw;
    height: 6vh;
  }

  #income-icon {
    background: #c4d0ff;
  }

  #expense-icon {
    background: #ffc4db;
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray_light};
  }

  .expense-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    background: #fedbe9;

    width: 50%;
    height: 15vh;

    border-radius: 15px;

    padding: 0rem 0.8rem;

    .expense {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  .income-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    background: #dbe1ff;

    width: 50%;
    height: 15vh;

    border-radius: 15px;

    padding: 0rem 0.8rem;

    .income {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default HomeStatsMain;
