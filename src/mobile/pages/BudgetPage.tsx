import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";
import Header from "../components/Header";
import Text from "../components/Text";

//Import Icons
import { FaLongArrowAltRight } from "react-icons/fa";

//Import Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { handleBudget } from "../../state/Income/incomeSlice";

const BudgetPage = () => {
  const income = useSelector((state: RootState) => state.income.income);
  const [budgetPercentage, setBudgetPercentage] = useState<number>(50);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetPercentage(Number(e.target.value));
  };

  useEffect(() => {
    const calculatedBudget = (income * budgetPercentage) / 100;
    dispatch(handleBudget(calculatedBudget));
  }, [dispatch, income, budgetPercentage]);

  const handleNavigate = () => {
    navigate("/create-budget");
  };

  return (
    <Main>
      <Header />
      <Text
        title="How much do you want to spend monthly?"
        text="We suggest that your monthly expenses do not exceed a certain percentage of your income, but you can set your own limits."
      />
      <div className="input-container">
        <div className="number-input">
          <h1>$</h1>
          <input
            type="number"
            value={(income * budgetPercentage) / 100}
            readOnly
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={budgetPercentage}
          onChange={handleBudgetChange}
        />
        <p>{`${budgetPercentage}% of your income`}</p>
      </div>
      <div className="button-container">
        <FaLongArrowAltRight color="white" size="25" />
        <ButtonStyled type="submit" onClick={handleNavigate}>
          Next
        </ButtonStyled>
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

const Main = styled.div`
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

    width: 100%;

    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .number-input {
      position: relative;

      width: 40%;

      h1 {
        position: absolute;
        bottom: 0%;
        left: 2%;
      }
    }

    h1 {
      color: ${(props) => props.theme.colors.secondary};
      font-weight: 500;
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

    button {
      width: 100%;

      padding: 1rem 0rem;

      border-radius: 10px;
      border: none;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};

      font-size: 1.3rem;
    }
  }
`;

export default BudgetPage;
