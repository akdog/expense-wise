import styled from "styled-components";

//Import Icons
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

//Import Components
import PersonalSettings from "../components/PersonalSettings";
import SecurityPrivacy from "../components/SecurityPrivacy";
import Navbar from "../components/Navbar";

const SettingsPage = () => {
  return (
    <Main>
      <div className="home-header">
        <FaUser size="25" />
        <FaBell size="25" />
      </div>
      <div className="settings-main">
        <PersonalSettings />
        <SecurityPrivacy />
      </div>
      <Navbar />
    </Main>
  );
};

const Main = styled.div`
  padding: 1rem;

  position: relative;

  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .settings-main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    margin-top: 1.5rem;

    .listed-settings {
      width: 90%;
      margin: 0 auto;

      .subheader {
        h3 {
          width: 100%;
        }
      }

      .single-setting {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1rem;

        padding: 1rem 0rem;

        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
      }
    }
  }
`;

export default SettingsPage;
