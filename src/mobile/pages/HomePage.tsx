import styled from "styled-components";

//Import Icons
import { FaMoneyBillWave } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const HomePage = () => {
  return (
    <Main>
      <div className="home-header">
        <FaUser size="25" />
        <FaBell size="25" />
      </div>
      <div className="main-container">
        <h1 id="main-header">Analytics</h1>
        <div className="budget-container">
          <div className="icon-container">
            <FaMoneyBillWave size="30" />
          </div>
          <div className="text-container">
            <div className="text-header">
              <h1>Monthly Budget</h1>
              <h1>7.120$</h1>
            </div>
            <hr />
            <div className="spend-container">
              <h1>Spend 5.245$ 80%</h1>
              <h1>Left 2.435$ 20%</h1>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding: 1rem;

  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .main-container {
    width: 100%;

    margin-top: 2rem;

    #main-header {
      font-size: 1.4rem;
    }
    .budget-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      width: 100%;

      padding: 1rem;
      margin-top: 1rem;

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
  }
`;

export default HomePage;
