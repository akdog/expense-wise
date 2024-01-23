import styled from "styled-components";
import { Link } from "react-router-dom";

//Import Components
import SingleStatDetail from "./SingleStatDetail";

const StatDetails = () => {
  return (
    <Main>
      <Link to="/category-state">
        <SingleStatDetail transaction="10 Transactions" percentage="35%" />
      </Link>
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

  a {
    width: 100%;
  }
`;

export default StatDetails;
