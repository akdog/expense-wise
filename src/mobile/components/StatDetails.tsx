import styled from "styled-components";

//Import Components
import SingleStatDetail from "./SingleStatDetail";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const StatDetails = () => {
  const state = useSelector((state: RootState) => state.transaction);

  return (
    <Main>
      {state.transaction.length <= 0 ? (
        <h1>No Transactions</h1>
      ) : (
        <>
          {state.transaction.map((item) => (
            <SingleStatDetail
              category={item.info}
              amount={item.amount}
              note={item.note}
            />
          ))}
        </>
      )}
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
  }
`;

export default StatDetails;
