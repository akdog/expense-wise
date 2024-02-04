import styled from "styled-components";

import profileIMG from "../../assets/ai-profile.png";

const Header = () => {
  return (
    <Main>
      <div className="user-profile">
        <div className="img-container">
          <img src={profileIMG} />
        </div>
        <div className="name-container">
          <h2>Asad Khan</h2>
          <h4>Junior Dev</h4>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;

  height: 10%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem;

  .user-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .img-container {
      width: 10%;

      border-radius: 50%;

      background: #d0d0d0;

      img {
        width: 100%;

        border-radius: 50%;
      }
    }

    .name-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

export default Header;
