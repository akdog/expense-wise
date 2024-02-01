import { useState } from "react";
import styled from "styled-components";

//Import Redux
import { useDispatch } from "react-redux";
import { handleSavingGoals } from "../../state/savingGoals/savingSlice";

const SetGoal = () => {
  const [name, setName] = useState("");
  const [goalAmount, setGoalAmount] = useState(0);
  const [emoji, setEmoji] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (
    e: React.FormEvent,
    name: string,
    goalAmount: number,
    emoji: string
  ) => {
    e.preventDefault();
    dispatch(handleSavingGoals({ name, amount: goalAmount, emoji }));

    setName("");
    setGoalAmount(0);
    setEmoji("");
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalAmount(Number(e.target.value));
  };

  const handleEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.target.value);
  };

  return (
    <Main
      onSubmit={(e: React.FormEvent) =>
        handleSubmit(e, name, goalAmount, emoji)
      }
    >
      <div className="name-input inputs">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
      </div>
      <div className="amount-input inputs">
        <label>Amount in $</label>
        <input
          type="number"
          placeholder="Amount"
          value={goalAmount}
          onChange={handleGoal}
        />
      </div>
      <div className="emoji-input ">
        <label>Emoji</label>
        <input
          type="text"
          placeholder="Emoji"
          value={emoji}
          onChange={handleEmoji}
        />
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
