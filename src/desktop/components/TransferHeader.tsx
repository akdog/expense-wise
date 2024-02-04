import styled from "styled-components";

const TransferHeader = () => {
  return (
    <Main>
      <h1>Transfer</h1>
      <div className="transfer-options">
        <h3>Send</h3>
        <h3>Apply For</h3>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;

  h1 {
    font-size: 1.8rem;
    color: white;
    font-weight: 500;
  }

  .transfer-options {
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    h3 {
      font-size: 1.4rem;
      color: white;
      font-weight: 500;
    }
  }
`;

export default TransferHeader;
