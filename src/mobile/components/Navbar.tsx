import styled from "styled-components";

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
        <FaChartPie size="30" />
        <IoIosCard size="30" />
        <FaPlus size="30" id="main-icon" />
        <FaCalendarAlt size="30" />
        <IoMdSettings size="30" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: sticky;
  bottom: 1%;

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
