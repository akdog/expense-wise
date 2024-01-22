import { useState } from "react";
import styled from "styled-components";

//Import Components
import Header from "../components/Header";
import Text from "../components/Text";
import ButtonC from "../components/ButtonC";

type Props = {
  pageNumberAsNumber: number;
};

const BudgetPage = ({ pageNumberAsNumber }: Props) => {
  const [number, setNumber] = useState<number>(25);
  return (
    <Main>
      <Header />
      <Text
        title="How much do you want to spend monthly?"
        text="We suggest that your monthly expenses do not exceed 80% of your income, but you can set your own limits."
      />
      <div className="input-container">
        <div className="number-input">
          <h1>$</h1>
          <input type="number" value={number} />
        </div>
        <input type="range" />
      </div>
      <ButtonC pageNumberAsNumber={pageNumberAsNumber} />
    </Main>
  );
};

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

      width: 30%;

      h1 {
        position: absolute;
        bottom: 0%;
        left: 5%;
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
