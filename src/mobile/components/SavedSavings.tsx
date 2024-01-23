//Import Icons
import { FaMoneyBillWave } from "react-icons/fa";
import styled from "styled-components";

const SavedSavings = () => {
  return (
    <Main>
      <div className="budget-inside">
        <div className="icon-container">
          <FaMoneyBillWave size="30" />
        </div>
        <div className="text-container">
          <div className="text-header">
            <h1>Playstation</h1>
            <h1>7.120$</h1>
          </div>
          <hr />
          <div className="spend-container">
            <h1>$0/00%</h1>
          </div>
        </div>
      </div>
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

    background: #ececec;

    border-radius: 10px;

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
      .spend-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        h1 {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default SavedSavings;
