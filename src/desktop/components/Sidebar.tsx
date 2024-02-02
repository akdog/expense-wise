import styled from "styled-components";

//Import Icons
import { IoHome } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <Main>
      <div className="sidebar-header">
        <h2>Pay</h2>
        <h4>Dashboard</h4>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-icon">
          <IoHome size="35" />
          <h4>Home</h4>
        </div>
        <div className="sidebar-icon">
          <FaRegUserCircle size="35" />
          <h4>Profile</h4>
        </div>
        <div className="sidebar-icon">
          <AiFillMessage size="35" />
          <h4>Messages</h4>
        </div>
        <div className="sidebar-icon">
          <IoSettings size="35" />
          <h4>Settings</h4>
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

  background: linear-gradient(
    180deg,
    rgba(1, 39, 145, 1) 0%,
    rgba(47, 105, 255, 1) 50%,
    rgba(0, 61, 170, 1) 100%
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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export default Sidebar;
