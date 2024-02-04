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
          <Link to="/">
            <IoHome size="35" />
            <h4>Home</h4>
          </Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/profile">
            <FaRegUserCircle size="35" />
            <h4>Profile</h4>
          </Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/transfer">
            <AiFillMessage size="35" />
            <h4>Messages</h4>
          </Link>
        </div>
        <div className="sidebar-icon">
          <Link to="/settings">
            <IoSettings size="35" />
            <h4>Settings</h4>
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

  background-image: linear-gradient(
    to right top,
    #6f6bd1,
    #7371d5,
    #7776da,
    #7c7cde,
    #8082e2,
    #7f86e5,
    #7f89e9,
    #7e8dec,
    #788ff0,
    #7091f4,
    #6894f7,
    #5f96fb
  );

  color: white;

  border-radius: 0px 20px 20px 0px;

  padding: 1rem;

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
      }
    }
  }
`;

export default Sidebar;
