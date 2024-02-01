import styled from "styled-components";

//Import Icons
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

//Import Components
import HomeBudget from "../components/HomeBudget";
import HomeStatistic from "../components/HomeStatistic";
import HomeSavings from "../components/HomeSavings";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const HomePage = () => {
  const state = useSelector((state: RootState) => state.transaction);
  console.log(state.transaction);

  return (
    <Main>
      <div className="home-header">
        <FaUser size="25" />
        <FaBell size="25" />
      </div>
      <HomeBudget />
      <HomeStatistic />
      <HomeSavings />
      <Navbar />
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding: 1rem;

  position: relative;

  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export default HomePage;
