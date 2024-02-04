import styled from "styled-components";

//Import Icons
import { IoHome } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Main>
      <div className="sidebar-header">
        <h2>Pay</h2>
        <h4>Dashboard</h4>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-icon">
          <Link to="/home">
            <IoHome size="35" />
            <h4>Dashboard</h4>
          </Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/saving">
            <FaRegUserCircle size="35" />
            <h4>Savings</h4>
          </Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/transfer">
            <AiFillMessage size="35" />
            <h4>Transfer</h4>
          </Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/stats">
            <IoSettings size="35" />
            <h4>Statistics</h4>
          </Link>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8rem;

  height: 100%;
  width: 8%;

  background: linear-gradient(to bottom, #285495, #7f2c9c);

  color: white;

  border-radius: 0px 20px 20px 0px;

  padding: 1rem;

  .sidebar-header {
    h2 {
      font-weight: 500;
      font-size: 1.4rem;
    }
    h4 {
      font-weight: 600;
      font-size: 1.3rem;
    }
  }

  .sidebar-menu {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    .sidebar-icon {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;

        text-decoration: none;
        color: white;

        h4 {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }
`;

export default Sidebar;
