import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

//Import Icons
import { FaLongArrowAltRight } from "react-icons/fa";

//Import Components
import Header from "../components/Header";
import Text from "../components/Text";

//Import Redux
import { useDispatch } from "react-redux";
import { handleIncome } from "../../state/Income/incomeSlice";

const IncomePage = () => {
  const [income, setIncome] = useState<number>(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncomeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(handleIncome(income));
  }, [dispatch, income]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIncome(0);
    navigate("/category");
  };

  return (
    <Main onSubmit={handleSubmit}>
      <Header />
      <Text
        title="Whats your income?"
        text="Value for the income received in the previous month. You may edit this value"
      />
      <div className="input-container">
        <h1>$</h1>
        <input type="number" value={income} onChange={handleIncomeValue} />
      </div>
      <div className="button-container">
        <FaLongArrowAltRight color="white" size="25" />
        <ButtonStyled type="submit">Next</ButtonStyled>
      </div>
    </Main>
  );
};

const ButtonStyled = styled.button`
  width: 100%;
  padding: 1rem 0rem;
  border-radius: 10px;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.3rem;
`;

const Main = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem 0.5rem;

  min-height: 100vh;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
    svg {
      width: 5%;
    }
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    margin-top: 3.5rem;

    h2 {
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.primary};
    }
    h4 {
      color: ${(props) => props.theme.colors.gray_light};
      font-weight: 600;
    }
  }

  .input-container {
    margin-top: 4rem;

    width: 40%;

    padding: 0.5rem;

    position: relative;

    h1 {
      position: absolute;
      color: ${(props) => props.theme.colors.secondary};
      font-weight: 500;

      top: 11%;
      left: 8%;
    }

    input {
      font-size: 2rem;
      width: 100%;

      text-indent: 1.5rem;

      border: none;
      outline: none;
      background: none;

      color: ${(props) => props.theme.colors.secondary};
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    margin-top: auto;

    position: relative;

    svg {
      position: absolute;
      left: 60%;
    }
  }
`;

export default IncomePage;
