import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Import Icons
import { SlCalender } from "react-icons/sl";

const Settings = () => {
  const [startingOn, setStartingOn] = useState<boolean>(false);
  const [includePayments, setIncludePayments] = useState<boolean>(false);
  const [receiveAlerts, setReceiveAlerts] = useState<boolean>(false);

  const toggleStartingOn = () => setStartingOn(!startingOn);
  const toggleIncludePayments = () => setIncludePayments(!includePayments);
  const toggleReceiveAlerts = () => setReceiveAlerts(!receiveAlerts);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <Main>
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      <div className="single-settings">
        <div className="icon-container adjusted-container">
          <SlCalender size="25" />
          <h3>Starting On</h3>
        </div>
        <h2>1st Day of the Month </h2>
      </div>
      <div className="single-settings">
        <div className="icon-container">
          <div
            className="switch"
            data-isOn={includePayments}
            onClick={toggleIncludePayments}
          >
            <motion.div className="handle" layout transition={spring} />
          </div>
          <h3>Including upcomming Payments </h3>
        </div>
        <h2>1st </h2>
      </div>
      <div className="single-settings">
        <div className="icon-container">
          <div
            className="switch"
            data-isOn={receiveAlerts}
            onClick={toggleReceiveAlerts}
          >
            <motion.div className="handle" layout transition={spring} />
          </div>
          <h3>Receive Alerts</h3>
        </div>
        <h2>When Reached 90% </h2>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  .settings-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    h1 {
      font-size: 1.2rem;
    }
  }
  .single-settings {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 0.5rem 1rem;

    h2 {
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.gray_light};
      font-weight: 500;
    }

    .adjusted-container {
      padding: 0rem 0.5rem;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .switch {
        width: 60px;
        height: 35px;
        background-color: ${(props) => props.theme.colors.gray};
        display: flex;
        justify-content: flex-start;
        border-radius: 50px;
        padding: 10px;
        cursor: pointer;
      }

      .switch[data-isOn="true"] {
        justify-content: flex-end;
        background-color: ${(props) => props.theme.colors.lightblue};
      }

      .handle {
        width: 15px;
        height: 15px;
        background-color: white;
        border-radius: 40px;
      }

      h3 {
        color: ${(props) => props.theme.colors.primary_light};
        font-weight: 500;
      }

      svg {
        color: ${(props) => props.theme.colors.primary_light};
      }
    }
  }
`;

export default Settings;
