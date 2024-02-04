import styled from "styled-components";

//Import Components
import UserCard from "./UserCard";
import SavingGoals from "./SavingGoals";
import Transactions from "./Transactions";
import Budget from "./Budget";

const Finance = () => {
  return (
    <Main>
      <h1>Dashboard</h1>
      <div className="hero-wrapper">
        <div className="left-container">
          <div className="top-container">
            <UserCard />
            <SavingGoals />
          </div>
          <div className="bottom-container">
            <Transactions />
          </div>
        </div>
        <div className="right-container">
          <Budget />
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

      border-radius: 20px;

      background: linear-gradient(to bottom, #285495, #7f2c9c);

      color: white;

      padding: 1.5rem;
    }
  }
`;

export default Finance;
