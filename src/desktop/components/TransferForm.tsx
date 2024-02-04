import styled from "styled-components";

const TransferForm = () => {
  return (
    <Main>
      <div className="pay-to-transfer">
        <label>Pay To</label>
        <input type="text" placeholder="Provide Details...." />
        <p>Please enter the wallet ID or destination email</p>
      </div>
      <div className="transfer-details">
        <div className="transfer-amount">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="transfer-reason">
          <label>Reason</label>
          <input type="text" />
        </div>
      </div>
      <h3>Total:</h3>
      <button>Send</button>
    </Main>
  );
};

const Main = styled.form`
  width: 100%;
  height: 100%;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .pay-to-transfer {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    input {
      width: 100%;
      padding: 1rem 0rem;
      text-indent: 0.5rem;

      border-radius: 10px;
      border: none;
    }

    p {
      font-size: 0.8rem;
      text-align: center;

      width: 100%;
    }
  }

  .transfer-details {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    width: 100%;
    height: 40%;

    .transfer-amount {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.2rem;

      width: 100%;
      height: 100%;

      input {
        padding: 0.6rem 0rem;
        border-radius: 10px;
        border: none;
      }
    }
    .transfer-reason {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.2rem;

      width: 100%;
      height: 100%;

      input {
        padding: 0.6rem 0rem;
        border-radius: 10px;
        border: none;
      }
    }
  }
  button {
    width: 100%;
    padding: 0.8rem;

    border-radius: 20px;
  }
`;

export default TransferForm;
