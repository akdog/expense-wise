import styled from "styled-components";

//Import Icons
import { FaUniversity, FaCar, FaHome, FaHeart, FaBook } from "react-icons/fa";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Link } from "react-router-dom";

const SavingGoals = () => {
  const stateGoal = useSelector((state: RootState) => state.savings.goals);

  const getIconBasedOnType = (categories: string) => {
    switch (categories.toLowerCase()) {
      case "fauniversity":
        return <FaUniversity size="35" />;
      case "facar":
        return <FaCar size="35" />;
      case "fahome":
        return <FaHome size="35" />;
      case "faheart":
        return <FaHeart size="35" />;
      case "fabook":
        return <FaBook size="35" />;
      default:
        return <FaHome size="35" />;
    }
  };

  if (stateGoal.length <= 1) {
    return (
      <NoGoals>
        <h1>No Goals Yet</h1>
        <Link to="/saving">Add Goals</Link>
      </NoGoals>
    );
  }

  return (
    <Main>
      <div className="payment-header">
        <h2>Saving Goals</h2>
      </div>
      <div className="payment-main">
        {stateGoal.map((item) => (
          <div className="saving-main">
            <h1>{getIconBasedOnType(item.emoji)}</h1>
            <h2>{item.name}</h2>
            <h4>${item.amount}</h4>
          </div>
        ))}
      </div>
    </Main>
  );
};

const NoGoals = styled.div`
  width: 55%;
  height: 30vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  a {
    margin-top: 20px;
    padding: 15px 30px;

    background-color: #3498db;
    color: #fff;

    border: none;
    border-radius: 5px;

    font-size: 20px;
    cursor: pointer;

    width: 70%;

    text-align: center;
  }
`;

const Main = styled.div`
  width: 55%;
  height: 30vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .payment-header {
    width: 100%;
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
    }
    margin-bottom: 1rem;
  }

  .payment-main {
    background: linear-gradient(to right, #285495, #7f2c9c);

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    border-radius: 20px;

    .saving-main {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      width: 100%;

      h1 {
        svg {
          color: white;
        }
      }

      h2 {
        color: white;
        font-weight: 500;
        font-size: 1.5rem;
      }
      h3 {
        color: white;
        font-weight: 400;
        font-size: 1.2rem;
      }
      h4 {
        color: white;
        font-weight: 400;
        font-size: 1.2rem;
      }
    }
  }
`;

export default SavingGoals;
