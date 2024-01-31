import styled from "styled-components";

//Import Icons
import { MdFastfood } from "react-icons/md";

//Import Components
import ExpenseLimit from "./ExpenseLimit";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

//Import Redux

const FixedLimiteCategory = () => {
  const state = useSelector((state: RootState) => state.income);

  return (
    <Main>
      <h1 id="main-header">Analytics</h1>
      {state.expenseLimit.map((item) => (
        <ExpenseLimit category={item.category} limit={item.limit} />
      ))}
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

    .icon-container {
      background: ${(props) => props.theme.colors.lightblue};
      width: 12vw;
      height: 6vh;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
    }

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

      hr {
        width: 100%;
        height: 2vh;
        background: ${(props) => props.theme.colors.lightblue};
        border-radius: 10px;
        border: none;
      }
    }
  }
`;

export default FixedLimiteCategory;
