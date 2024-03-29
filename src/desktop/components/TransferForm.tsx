import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Redux
import { useDispatch, useSelector } from "react-redux";
import { handleTransaction } from "../../state/transaction/transactionSlice";
import { RootState } from "../../state/store";

const TransferForm = () => {
  const [info, setInfo] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState(0);

  const stateIncome = useSelector((state: RootState) => state.income);
  const stateTransfer = useSelector((state: RootState) => state.transaction);

  const expenseData = stateTransfer.transaction.reduce(
    (item, expense) => item + expense.amount,
    0
  );

  const newBalance = stateIncome.monthlyBudget - expenseData;

  const dispatch = useDispatch();

  const handleTransactionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;

    if (info === "" && note === "" && amount === 0) {
      return toast.error("You missed some Infos!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    if (newBalance <= 0) {
      return toast.error("Not enough money", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    dispatch(handleTransaction({ info, note: formattedDate, amount }));

    setInfo("");
    setNote("");
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

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e.target.value);
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleNote = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNote(e.target.value.toLowerCase());
  };

  return (
    <>
      <ToastContainer />
      <Main onSubmit={handleTransactionSubmit}>
        <div className="pay-to-transfer">
          <label>Pay To</label>
          <input
            type="text"
            placeholder="Provide Details...."
            value={info}
            onChange={handleInfo}
          />
          <p>Please enter the wallet ID or destination email</p>
        </div>
        <div className="transfer-details">
          <div className="transfer-amount">
            <label>Amount</label>
            <input type="text" value={amount} onChange={handleAmount} />
          </div>
          <div className="transfer-reason">
            <label>Reason</label>
            <select value={note} onChange={handleNote}>
              <option value="FaHome">Home</option>
              <option value="FaBook">Books</option>
              <option value="FaHeart">Health</option>
              <option value="FaCar">Car</option>
              <option value="FaUniversity">Uni</option>
            </select>
          </div>
        </div>
        <h3>Total:{amount}</h3>
        <button>Send</button>
      </Main>
    </>
  );
};

const Main = styled.form`
  width: 100%;
  height: 100%;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  label {
    font-size: 1rem;
    color: black;
  }

  .pay-to-transfer {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    input {
      width: 100%;
      padding: 1rem 0rem;
      text-indent: 0.5rem;

      border-radius: 10px;
      border: none;
    }

    p {
      font-size: 0.8rem;
      text-align: center;

      width: 100%;

      color: black;
    }
  }

  .transfer-details {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    width: 100%;
    height: 40%;

    .transfer-amount {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.2rem;

      width: 100%;
      height: 100%;

      input {
        padding: 0.6rem 0rem;
        border-radius: 10px;
        border: none;
      }
    }
    .transfer-reason {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.2rem;

      width: 100%;
      height: 100%;

      select {
        width: 100%;
        padding: 0.6rem;

        border-radius: 10px;
      }
    }
  }
  h3 {
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.8rem;

    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
`;

export default TransferForm;
