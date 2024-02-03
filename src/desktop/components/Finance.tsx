import styled from "styled-components";

//Import Components
import UserCard from "./UserCard";
import UpPayment from "./UpPayment";
import Transactions from "./Transactions";

const Finance = () => {
  return (
    <Main>
      <h1>Dashboard</h1>
      <div className="hero-wrapper">
        <div className="left-container">
          <div className="top-container">
            <UserCard />
            <UpPayment />
          </div>
          <div className="bottom-container">
            <Transactions />
          </div>
        </div>
        <div className="right-container">
          <div className="budget-container">
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
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  .hero-wrapper {
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    .left-container {
      width: 70%;
      height: 100%;

      .top-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 50%;
      }

      .bottom-container {
        width: 100%;
        height: 50%;
      }
    }

    .right-container {
      width: 30%;
      height: 100%;

      background: blue;
      color: white;

      padding: 1.5rem;

      .budget-container {
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
      }
    }
  }
`;

export default Finance;
