import styled from "styled-components";

const SingleTransaction = () => {
  return (
    <Main>
      <h1>Icon</h1>
      <h3>Shopping</h3>
      <h4>05 March 2021 10:00</h4>
      <h3>$300</h3>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export default SingleTransaction;
