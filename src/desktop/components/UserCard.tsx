import styled from "styled-components";

const UserCard = () => {
  return (
    <Main>
      <div className="card-header">
        <h1>Muster-Bank</h1>
        <h3>Premium Account</h3>
      </div>
      <div className="card-details">
        <h2>1234</h2>
        <h2>****</h2>
        <h2>****</h2>
        <h2>9524</h2>
      </div>
      <div className="card-expire">
        <div className="card-holder">
          <h4>Card Holder</h4>
          <h2>Max Mustermann</h2>
        </div>
        <div className="card-date">
          <h4>Expire Date</h4>
          <h2>06/21</h2>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  width: 40%;
  height: 30vh;

  padding: 1rem;

  border-radius: 20px;

  background: linear-gradient(to right, #285495, #7f2c9c);

  .card-header {
    h1 {
      font-size: 1.3rem;
      color: white;
      font-weight: 500;
    }

    h3 {
      font-size: 0.8rem;
      color: white;
      font-weight: 300;
    }
  }

  .card-details {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;

    h2 {
      color: white;
      font-weight: 500;
      font-size: 2rem;
    }
  }

  .card-expire {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h4 {
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
    }

    h2 {
      color: white;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`;

export default UserCard;
