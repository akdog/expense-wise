import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SetGoal = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/goal/finished");
  };

  return (
    <Main onSubmit={handleSubmit}>
      <div className="name-input inputs">
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="amount-input inputs">
        <label>Amount goal</label>
        <input type="number" placeholder="Amount" />
      </div>
      <div className="emoji-input ">
        <label>Emoji</label>
        <input type="text" placeholder="Emoji" />
      </div>
      <button type="submit">Set Goal</button>
    </Main>
  );
};

const Main = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  button {
    width: 100%;
    padding: 1rem 0rem;
    border-radius: 10px;
    border: none;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    font-size: 1.3rem;
  }

  input {
    outline: none;

    font-size: 1.2rem;
    text-indent: 1rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;

    background: #f1f1f1;
  }
  label {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray_light};
  }

  width: 100%;
  .inputs {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    input {
      width: 100%;
      padding: 1rem 0rem;

      border-radius: 10px;
      border: none;
    }
  }
  .emoji-input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    width: 100%;

    input {
      width: 100%;
      padding: 1rem;

      text-indent: 0.5rem;

      border: none;
    }
  }
`;

export default SetGoal;
