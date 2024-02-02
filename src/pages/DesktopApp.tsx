import styled from "styled-components";

//Import Pages
import LandingPage from "../desktop/pages/LandingPage";

//Import Components

const DesktopApp = () => {
  return (
    <Main>
      <LandingPage />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
`;

export default DesktopApp;
