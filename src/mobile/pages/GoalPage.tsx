import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";
import SetGoal from "../components/SetGoal";

const GoalPage = () => {
  return (
    <Main>
      <PageHeader title="New Goal" />
      <SetGoal />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 100vh;

  width: 100%;

  padding: 1rem;
`;

export default GoalPage;
