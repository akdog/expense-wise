import styled from "styled-components";
import { Link } from "react-router-dom";

//Import Icons
import { FaChartPie } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <Main>
      <div className="navbar-icons">
        <Link id="navbar-link" to="/home">
          <FaChartPie size="30" />
        </Link>
        <IoIosCard size="30" />
        <Link to="/transaction">
          <FaPlus size="30" id="main-icon" />
        </Link>
        <FaCalendarAlt size="30" />
        <Link id="navbar-link" to="/settings">
          <IoMdSettings size="30" />
        </Link>
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: sticky;
  bottom: 2%;

  width: 95%;
  margin: 0 auto;

  background: ${(props) => props.theme.colors.primary};

  padding: 1rem;

  border-radius: 40px;

  .navbar-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: white;

    #main-icon {
      background: white;
      border-radius: 10px;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default Navbar;
