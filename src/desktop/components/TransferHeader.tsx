import styled from "styled-components";

const TransferHeader = () => {
  return (
    <Main c>
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

  .transfer-options {
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
  }
`;

export default TransferHeader;
