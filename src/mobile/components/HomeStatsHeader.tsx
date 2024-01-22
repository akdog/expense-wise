import { Link } from "react-router-dom";

//Import Icons
import { IoStatsChart } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const HomeStatsHeader = () => {
  return (
    <Main>
      <Link to="/statistics">
        <div className="icon-container">
          <IoStatsChart size="25" />
          <h1 id="main-header">Statistics</h1>
        </div>
      </Link>
      <div className="date-container">
        <h1>This month</h1>
        <IoMdArrowDropdown size="25" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    #main-header {
      font-size: 1.4rem;
    }
  }

  .date-container {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    h1 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.lightblue};
    }
  }
`;

export default HomeStatsHeader;
