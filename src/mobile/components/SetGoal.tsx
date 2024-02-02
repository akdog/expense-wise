import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

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

    if (name === "" && goalAmount === 0 && emoji === "") {
      return console.error("Failed to Save");
    }
    dispatch(handleSavingGoals({ name, amount: goalAmount, emoji }));

    setName("");
    setGoalAmount(0);
    setEmoji("");
  };

  const notify = () => toast("Goal Saved!");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoalAmount(Number(e.target.value));
  };

  const handleEmoji = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.target.value);
  };

  const inputVariants = {
    focus: { scale: 1.05 },
    blur: { scale: 1 },
  };

  return (
    <Main
      onSubmit={(e: React.FormEvent) =>
        handleSubmit(e, name, goalAmount, emoji)
      }
    >
      <ToastContainer />
      <motion.div
        className="name-input inputs"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <label>Name</label>
        <motion.input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
          variants={inputVariants}
          whileFocus="focus"
        />
      </motion.div>
      <motion.div
        className="amount-input inputs"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <label>Amount in $</label>
        <motion.input
          type="number"
          placeholder="Amount"
          value={goalAmount}
          onChange={handleGoal}
          variants={inputVariants}
          whileFocus="focus"
        />
      </motion.div>
      <motion.div
        className="emoji-input"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <label>Emoji</label>
        <motion.input
          type="text"
          placeholder="Emoji"
          value={emoji}
          onChange={handleEmoji}
          variants={inputVariants}
          whileFocus="focus"
        />
      </motion.div>
      <motion.button
        onClick={notify}
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Set Goal
      </motion.button>
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
