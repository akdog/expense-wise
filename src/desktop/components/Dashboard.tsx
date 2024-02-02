import styled from "styled-components";

//Import Components
import Header from "./Header";
import Finance from "./Finance";

const Dashboard = () => {
  return (
    <Main>
      <Header />
      <Finance />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;
`;

export default Dashboard;
