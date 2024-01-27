import styled from "styled-components";

//Import Icons
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <Main>
      <h1 id="logo">SmartExpense</h1>
      <div className="menu">
        <div className="menu-icon">
          <FaHome size="20" />
          <h3>Home</h3>
        </div>
        <div className="menu-icon">
          <MdDashboard size="20" />
          <h3>Dashboard</h3>
        </div>
        <div className="menu-icon">
          <FaWallet size="20" />
          <h3>Wallet</h3>
        </div>
        <div className="menu-icon">
          <MdCompareArrows size="20" />
          <h3>Transactions</h3>
        </div>
        <div className="menu-icon">
          <FaUser size="20" />
          <h3>Profile</h3>
        </div>
        <div className="menu-icon">
          <IoSettings size="20" />
          <h3>Settings</h3>
        </div>
        <div className="menu-icon">
          <IoLogOut size="20" />
          <h3>Log Out</h3>
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
  gap: 3rem;

  width: 15%;
  height: 100%;

  background: ${(props) => props.theme.Dcolors.contrast};
  padding: 1rem;

  #logo {
    font-weight: 500;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 4rem;

    .menu-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      cursor: pointer;

      svg {
        color: ${(props) => props.theme.colors.lightblue};
      }
    }
  }
`;

export default Sidebar;
