import styled from "styled-components";

//Import Components
import SingleStatDetail from "./SingleStatDetail";

const StatDetails = () => {
  return (
    <Main>
      <SingleStatDetail transaction="10 Transactions" percentage="35%" />
      <SingleStatDetail transaction="10 Transactions" percentage="35%" />
      <SingleStatDetail transaction="10 Transactions" percentage="35%" />
      <SingleStatDetail transaction="10 Transactions" percentage="35%" />
      <SingleStatDetail transaction="10 Transactions" percentage="35%" />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`;

export default StatDetails;
