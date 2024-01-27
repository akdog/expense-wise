import styled from "styled-components";

const DashboardHeader = () => {
  return (
    <Main>
      <div className="logo-container">
        <h1>Dashboard</h1>
      </div>
      <div className="actions-container">
        <div className="input-container">
          <input type="text" placeholder="Hallo World" />
        </div>
        <div className="profile-container">
          <h4>Img</h4>
          <h3>Name</h3>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  .logo-container {
    h1 {
      font-weight: 500;
    }
  }

  .actions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    width: 35%;

    .input-container {
      width: 100%;

      input {
        padding: 0.5rem 0rem;
        width: 100%;

        text-indent: 0.5rem;
        color: white;

        border-radius: 10px;
        border: none;
        background: ${(props) => props.theme.Dcolors.contrast};
      }
    }

    .profile-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      h4,
      h3 {
        font-weight: 500;
      }
    }
  }
`;

export default DashboardHeader;
