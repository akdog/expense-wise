import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Redux
import { useDispatch } from "react-redux";
import { handleSavingGoals } from "../../state/savingGoals/savingSlice";

//Import Icons
import { FaUniversity, FaCar, FaHome, FaHeart, FaBook } from "react-icons/fa";

//Import Components
import SavingIcons from "./SavingIcons";

const SavingForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [emoji, setEmoji] = useState("");

  const dispatch = useDispatch();

  const handleSavings = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" && amount === 0 && emoji === "") {
      return toast.error("Goaal Saving Failed!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    dispatch(handleSavingGoals({ name, amount, emoji }));

    setName("");
    setAmount(0);

    toast.success("Transfer successful!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  return (
    <>
      <ToastContainer />
      <Main onSubmit={handleSavings}>
        <h1>Saving Goals</h1>
        <form className="saving-form">
          <div className="saving-title inputs-container">
            <label>Title</label>
            <input
              type="text"
              placeholder="Provide Details..."
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="saving-amount inputs-container">
            <label>Amount</label>
            <input
              type="text"
              placeholder="Provide Details..."
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div className="saving-icon ">
            <SavingIcons
              icon={<FaBook size="35" color="black" />}
              name="Book"
              setEmoji={setEmoji}
              iconName="FaBook"
            />
            <SavingIcons
              icon={<FaHeart size="35" color="black" />}
              name="Health"
              setEmoji={setEmoji}
              iconName="FaHeart"
            />
            <SavingIcons
              icon={<FaCar size="35" color="black" />}
              name="Car"
              setEmoji={setEmoji}
              iconName="FaCar"
            />
            <SavingIcons
              icon={<FaHome size="35" color="black" />}
              name="Home"
              setEmoji={setEmoji}
              iconName="FaHome"
            />
            <SavingIcons
              icon={<FaUniversity size="35" color="black" />}
              name="Uni"
              setEmoji={setEmoji}
              iconName="FaUniversity"
            />
          </div>
          <button>Submit</button>
        </form>
      </Main>
    </>
  );
};

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80%;

  border-radius: 20px;
  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 2rem;
    color: black;
    font-weight: 500;
  }

  .saving-form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    background: #f5f5f5;

    -webkit-box-shadow: 10px 10px 4px 0px rgba(199, 199, 199, 1);
    -moz-box-shadow: 10px 10px 4px 0px rgba(199, 199, 199, 1);
    box-shadow: 10px 10px 4px 0px rgba(199, 199, 199, 1);

    color: black;
    border-radius: 20px;

    width: 80%;
    height: 100%;

    .inputs-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.5rem;

      width: 40%;

      input {
        padding: 0.8rem 0rem;
        width: 100%;

        border-radius: 20px;
        border: none;

        text-indent: 0.5rem;
      }

      label {
        color: black;
        font-weight: 500;
      }
    }

    .saving-icon {
      width: 40%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;

        cursor: pointer;

        h3 {
          color: black;
          font-weight: 500;
        }
      }
    }

    button {
      width: 60%;
      padding: 1rem;
      border-radius: 20px;
      border: none;
      cursor: pointer;
    }
  }
`;

export default SavingForm;
