import { useEffect, useState } from "react";
import styled from "styled-components";

//Import Redux
import { handleLimit } from "../../state/Income/incomeSlice";
import { useDispatch } from "react-redux";

type Props = {
  categoryName: string;
  icon: React.ReactNode;
  category: string;
};

const SingleLimiteCategory = ({ categoryName, icon, category }: Props) => {
  const [expense, setExpense] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLimit({ category, limit: expense }));
  }, [dispatch, category, expense]);

  const handleExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense(Number(e.target.value));
  };

  return (
    <Main>
      <div className="icon-container">
        <div className="svg-container">{icon}</div>
        <h3>{categoryName}</h3>
      </div>
      <div className="price-container">
        <input value={expense} onChange={handleExpense} />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .price-container {
    width: 20%;

    input {
      color: ${(props) => props.theme.colors.primary};
      background: none;
      border: none;
      outline: none;
      font-size: 1.3rem;

      width: 100%;
      margin: 0 auto;

      padding: 1rem 0rem;

      text-indent: 1.2rem;
    }
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h3 {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 500;
    }
    .svg-container {
      background: ${(props) => props.theme.colors.lightblue};
      width: 12vw;
      height: 6vh;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
    }
  }
`;

export default SingleLimiteCategory;
