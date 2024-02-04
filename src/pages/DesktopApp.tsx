import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

//Import Pages
import LandingPage from "../desktop/pages/LandingPage";
import TransferPage from "../desktop/pages/TransferPage";
import SavingPage from "../desktop/pages/SavingPage";

//Import Components

const DesktopApp = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/saving" element={<SavingPage />} />
      </Routes>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
`;

export default DesktopApp;
