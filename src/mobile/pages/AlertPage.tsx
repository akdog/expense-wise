import styled from "styled-components";

//Import Components
import Header from "../components/Header";
import Text from "../components/Text";
import ButtonC from "../components/ButtonC";

type Props = {
  pageNumberAsNumber: number;
};

const AlertPage = ({ pageNumberAsNumber }: Props) => {
  return (
    <Main>
      <Header />
      <Text
        title="Choose a percentage of your budget to receive alerts"
        text="Users with reminders enabled are over 2x more likley to stick to their budgets"
      />
      <div className="input-container">
        <input type="range" />
        <div className="alert-container">
          <button>+</button>
          <h3>Receive Alert</h3>
        </div>
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

    input {
      font-size: 2rem;
      width: 100%;

      text-indent: 1.5rem;

      border: none;
      outline: none;

      color: ${(props) => props.theme.colors.secondary};
    }

    .alert-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      margin-top: 1rem;
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

export default AlertPage;
