import styled from "styled-components";

const Finance = () => {
  return (
    <Main>
      <h1>Dashboard</h1>
      <div className="user-container">
        <div className="top-container">
          <div className="card-container">
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
          </div>
          <div className="payment-container">
            <h1>Payment</h1>
          </div>
        </div>
        <div className="transactions-container">
          <h1>Transactions</h1>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 90%;
  margin: 0 auto;

  .user-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    .top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      width: 100%;

      .card-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;

        width: 50%;
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
        }
      }

      .payment-container {
        width: 100%;
        background: yellow;
      }
    }
  }
`;

export default Finance;
