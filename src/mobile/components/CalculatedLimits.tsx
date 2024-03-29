import styled from "styled-components";

//Import Componetns
import FixedLimiteCategory from "./FixedLimiteCategory";

//Import Icons
import { FaPlus } from "react-icons/fa";

const CalculatedLimits = () => {
  return (
    <Main>
      <div className="limited-header">
        <h1>Limited Categories</h1>
        <FaPlus size="25" />
      </div>
      <FixedLimiteCategory />
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

  margin-top: 2.5rem;
  .limited-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.primary};
    }
    svg {
      color: ${(props) => props.theme.colors.lightblue};
    }
  }
`;

export default CalculatedLimits;
