//Import Components
import styled from "styled-components";
import Header from "./Header";
import SavingForm from "./SavingForm";

const Savings = () => {
  return (
    <Main>
      <Header />
      <SavingForm />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
`;

export default Savings;
