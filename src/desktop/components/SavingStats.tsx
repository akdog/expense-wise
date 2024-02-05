import styled from "styled-components";

// Import Components
import PieGraph from "./PieGraph";
import SavingDetails from "./SavingDetails";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const SavingStats = () => {
  const stateSaving = useSelector((state: RootState) => state.savings.goals);

  const savingAmount = stateSaving.reduce(
    (number, goal) => number + goal.amount,
    0
  );

  if (savingAmount <= 0) {
    return (
      <NoSaving>
        <div className="saving-header">
          <h1>Saving</h1>
          <h2>No Savings yet</h2>
        </div>
      </NoSaving>
    );
  }

  return (
    <Main>
      <div className="saving-header">
        <h1>Saving</h1>
        <h2>${savingAmount}</h2>
      </div>
      <PieGraph />
      {stateSaving.map((item) => (
        <SavingDetails
          title={item.name}
          info={item.emoji}
          amount={item.amount}
        />
      ))}
    </Main>
  );
};

const NoSaving = styled.div`
  background: linear-gradient(to right, #285495, #7f2c9c);

  width: 35%;
  height: 40vh;
  padding: 1rem;
  border-radius: 20px;

  .saving-header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-size: 1.5rem;
      color: white;
      font-weight: 500;
    }
    h2 {
      color: white;
    }
  }
`;

const Main = styled.div`
  background: linear-gradient(to right, #285495, #7f2c9c);

  width: 35%;
  height: 40vh;
  padding: 1rem;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .saving-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
      font-size: 1.5rem;
      color: white;
      font-weight: 500;
    }
    h2 {
      color: white;
    }
  }

  .saving-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h2 {
      color: white;
      font-size: 1.6rem;
      font-weight: 500;
    }
    h3 {
      color: white;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

export default SavingStats;
