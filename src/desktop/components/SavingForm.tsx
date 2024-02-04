import styled from "styled-components";

const SavingForm = () => {
  return (
    <Main>
      <h1>Saving Goals</h1>
      <form className="saving-form">
        <div className="saving-title inputs-container">
          <label> Title</label>
          <input type="text" placeholder="Provide Details..." />
        </div>
        <div className="saving-amount inputs-container">
          <label>Amount</label>
          <input type="text" placeholder="Provide Details..." />
        </div>
        <div className="saving-icon ">
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
          <div className="icon-container">
            <h1>Icon</h1>
            <h3>Name</h3>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </Main>
  );
};

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80%;

  border-radius: 20px;
  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 2rem;
    color: black;
    font-weight: 500;
  }

  .saving-form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(
      to right top,
      #6f6bd1,
      #7371d5,
      #7776da,
      #7c7cde,
      #8082e2,
      #7f86e5,
      #7f89e9,
      #7e8dec,
      #788ff0,
      #7091f4,
      #6894f7,
      #5f96fb
    );
    border-radius: 20px;

    width: 80%;
    height: 100%;

    .inputs-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.5rem;

      width: 40%;

      input {
        padding: 0.8rem 0rem;
        width: 100%;

        border-radius: 20px;
        border: none;

        text-indent: 0.5rem;
      }

      label {
        color: white;
        font-weight: 500;
      }
    }

    .saving-icon {
      width: 40%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;

        background: red;

        h3 {
          color: white;
          font-weight: 500;
        }
      }
    }

    button {
      width: 60%;
      padding: 1rem;
      border-radius: 20px;
      border: none;
      cursor: pointer;
    }
  }
`;

export default SavingForm;
