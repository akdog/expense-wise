import styled from "styled-components";
//Import Components
import Header from "./Header";
import Stats from "./Stats";

const Statistics = () => {
  return (
    <Main>
      <Header />
      <Stats />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export default Statistics;
