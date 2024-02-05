import { useState } from "react";
import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";
import SetGoal from "../components/SetGoal";

const GoalPage = () => {
  const [isAlert, setIsAlert] = useState(false);

  return (
    <Main>
      <PageHeader title="New Goal" isAlert={isAlert} setIsAlert={setIsAlert} />
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
