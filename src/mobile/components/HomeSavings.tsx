import { Link } from "react-router-dom";

import styled from "styled-components";

//Import Icons
import { TbPigMoney } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";

//Import Components
import SavedSavings from "./SavedSavings";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const HomeSavings = () => {
  const state = useSelector((state: RootState) => state.savings);

  return (
    <Main>
      <div className="savings-container">
        <div className="savings-header">
          <TbPigMoney size="40" />
          <div className="savings-text">
            <h3>My saving Goals</h3>
            <h5>Add your saving Goals</h5>
          </div>
        </div>
        <Link to="/goal">
          <FaPlus size="35" />
        </Link>
      </div>
      {state.goals.length >= 0 ? (
        state.goals.map((item) => (
          <SavedSavings name={item.name} amount={item.amount} />
        ))
      ) : (
        <h3 id="no-goals">No Saving Goals...</h3>
      )}
    </Main>
  );
};

const Main = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  margin-top: 2.5rem;

  svg {
    color: ${(props) => props.theme.colors.lightblue};
  }

  #no-goals {
    margin-top: 4rem;
    margin-bottom: 5rem;
  }

  .savings-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    .savings-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      .savings-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
          font-weight: 800;
          color: ${(props) => props.theme.colors.primary};
        }
        h5 {
          font-weight: 700;
          color: ${(props) => props.theme.colors.gray_light};
        }
      }
    }
  }
`;

export default HomeSavings;
