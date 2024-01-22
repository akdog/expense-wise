import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";

//Import Icons
import { FaSearch } from "react-icons/fa";
import SingleStatDetail from "../components/SingleStatDetail";

const CategoryStatePage = () => {
  return (
    <Main>
      <PageHeader title="Eating Out" />
      <div className="input-container">
        <input type="text" placeholder="Enter description" />
        <FaSearch size="25" />
      </div>
      <div className="settings-container">
        <div className=" settings">
          <h1>this month</h1>
        </div>
        <div className="settings">
          <h1>All accounts</h1>
        </div>
        <div className="settings">
          <h1>amount</h1>
        </div>
      </div>
      <div className="expense-total-container">
        <h3>Total Expenses</h3>
        <h2>$7.785.20</h2>
      </div>
      <div className="categoried-expenses">
        <SingleStatDetail
          transaction="*2345 AIG Private Bank"
          percentage="10:15"
        />
        <SingleStatDetail
          transaction="*2345 AIG Private Bank"
          percentage="10:15"
        />
        <SingleStatDetail
          transaction="*2345 AIG Private Bank"
          percentage="10:15"
        />
        <SingleStatDetail
          transaction="*2345 AIG Private Bank"
          percentage="10:15"
        />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  height: 100vh;

  padding: 1rem;

  .input-container {
    width: 90%;
    margin: 0 auto;

    position: relative;

    svg {
      position: absolute;
      left: 0%;
      top: 25%;

      color: ${(props) => props.theme.colors.gray_light};
    }

    input {
      padding: 0.8rem 0rem;
      width: 100%;

      border: none;
      border-radius: 10px;

      background: #eff0ff;

      text-indent: 2rem;

      font-size: 1.5rem;

      outline: none;
    }
  }

  .settings-container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    h1 {
      font-size: 1rem;
    }

    .settings {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30%;
      padding: 1.5rem 0rem;
    }
    .settings:first-child {
      background: #eff0ff;
      h1 {
        color: ${(props) => props.theme.colors.lightblue};
        font-weight: 600;
      }
    }
  }

  .expense-total-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h2 {
      color: ${(props) => props.theme.colors.lightblue};
      font-weight: 500;
      font-size: 2.5rem;
    }
  }

  .categoried-expenses {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    margin-top: 1.5rem;
  }
`;

export default CategoryStatePage;
