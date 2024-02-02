import { useState } from "react";

import styled from "styled-components";

//Import Icons
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleInput = () => {
    setIsActive(!isActive);
  };

  return (
    <Main>
      <div className="input-container">
        <FaSearch onClick={handleInput} size="35" />
        {isActive && <input type="text" placeholder="Search..." />}
      </div>
      <div className="user-profile">
        <h1>Img</h1>
        <div className="name-container">
          <h2>Asad Khan</h2>
          <h4>Junior Dev</h4>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
      padding: 1rem 0rem;
      text-indent: 1rem;

      border-radius: 10px;
      border: none;
      outline: none;
    }
  }

  .user-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .name-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default Header;
