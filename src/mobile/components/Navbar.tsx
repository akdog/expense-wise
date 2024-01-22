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
        <FaChartPie size="40" />
        <IoIosCard size="40" />
        <FaPlus size="40" id="main-icon" />
        <FaCalendarAlt size="40" />
        <IoMdSettings size="40" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: absolute;
  bottom: 1%;

  width: 90%;
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
