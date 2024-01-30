import { useEffect, useState } from "react";

//Import Icons
import { MdFastfood } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//Import Redux
import { RootState } from "../../state/store";
import { handleLimit } from "../../state/Income/incomeSlice";

const SingleLimiteCategory = () => {
  const [expense, setExpense] = useState(0);

  const state = useSelector((state: RootState) => state.income.expenseLimit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLimit(expense));
  }, [dispatch, expense]);

  const handleExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense(Number(e.target.value));
  };

  return (
    <Main>
      <div className="icon-container">
        <div className="svg-container">
          <MdFastfood size="25" />
        </div>
        <h3>Eating</h3>
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
    h3 {
      color: ${(props) => props.theme.colors.primary};
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
