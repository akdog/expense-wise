import styled from "styled-components";

//Import Icons
import { FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const LargeBudget = () => {
  const state = useSelector((state: RootState) => state.income);

  return (
    <Main>
      <div className="budget-header">
        <FaMoneyBillWave size="35" />
        <h1>Total Budget:{state.income}</h1>
      </div>
      <div className="main-budget">
        <h2>$7.320</h2>
        <input type="range" />
        <div className="spend-container">
          <h5 id="spend">Spend $5.234 80%</h5>
          <h5 id="left">Left $2.123 20%</h5>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 2rem;

  width: 100%;

  .budget-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .main-budget {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    h2 {
      color: ${(props) => props.theme.colors.lightblue};
    }

    input {
      width: 100%;
    }

    .spend-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      #left {
        color: ${(props) => props.theme.colors.gray_light};
      }
      #spend {
        color: ${(props) => props.theme.colors.lightblue};
      }
    }
  }
`;

export default LargeBudget;
