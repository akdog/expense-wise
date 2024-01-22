import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//Import Images
import confetti from "../../assets/confetti.png";

const CreateBudgetPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/total");
  };

  return (
    <Main>
      <div className="text-container">
        <div className="img-container">
          <img src={confetti} />
        </div>
        <h2>Monthly Budget created successfully!</h2>
        <h4>Follow your Progress regulary by checking your analytics</h4>
      </div>
      <div className="button-container">
        <button id="budget-analytics" onClick={handleNavigate}>
          Budget analytics
        </button>
        <button id="view-analytics" onClick={handleNavigate}>
          View Analytics
        </button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;

  padding: 1rem;

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    height: 90vh;

    .img-container {
      width: 100%;
      img {
        width: 100%;
      }
    }

    h2 {
      font-size: 1.4rem;
      text-align: center;
      color: ${(props) => props.theme.colors.primary};
    }
    h4 {
      font-size: 1rem;
      font-weight: 500;
      text-align: center;

      width: 80%;

      color: ${(props) => props.theme.colors.gray_light};
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    #budget-analytics {
      width: 100%;
      padding: 1rem 0rem;
      border-radius: 10px;
      border: none;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      font-size: 1.3rem;
    }

    #view-analytics {
      width: 100%;

      padding: 1rem 0rem;

      border-radius: 10px;
      border: none;
      color: ${(props) => props.theme.colors.secondary};

      font-size: 1.3rem;
    }
  }
`;

export default CreateBudgetPage;
