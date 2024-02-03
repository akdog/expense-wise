import styled from "styled-components";

const UserCard = () => {
  return (
    <Main>
      <div className="card-header">
        <h1>Deutsche-Bank</h1>
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
          <h2>Asad Khan</h2>
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

  background: green;

  .card-details {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
  }

  .card-expire {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export default UserCard;
