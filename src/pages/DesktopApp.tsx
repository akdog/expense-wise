import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

//Import Pages
import LandingPage from "../desktop/pages/LandingPage";
import TransferPage from "../desktop/pages/TransferPage";
import SavingPage from "../desktop/pages/SavingPage";
import StatsPage from "../desktop/pages/StatsPage";

const DesktopApp = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/saving" element={<SavingPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
`;

export default DesktopApp;
