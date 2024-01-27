import styled from "styled-components";

const UsersCard = () => {
  return (
    <Main>
      <div className="users-header">
        <h1>My Cards</h1>
        <h3>Add New</h3>
      </div>
      <div className="main-card">
        <div className="card-header">
          <h1>EW-Bank</h1>
        </div>
        <div className="card-balance">
          <h3>Balance</h3>
        </div>
        <div className="card-details">
          <h3>IBAN</h3>
          <div className="detail">
            <h3>Name</h3>
            <h3>Date</h3>
          </div>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 25%;
  height: 100%;

  background: ${(props) => props.theme.Dcolors.contrast};
  padding: 1rem;
  border-radius: 20px;

  .users-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }
    h3 {
      font-weight: 600;
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }

  .main-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    margin-top: 1rem;
    background: linear-gradient(to bottom right, #3498db, #1abc9c);
    border-radius: 10px;
    padding: 1rem;

    color: white;

    .card-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      width: 100%;

      h1 {
        font-size: 1.3rem;
      }
    }
    .card-balance {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
    }
    .card-details {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      width: 100%;

      .detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

export default UsersCard;
