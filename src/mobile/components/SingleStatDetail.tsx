//Import Icons
import { MdFastfood } from "react-icons/md";
import styled from "styled-components";

type Props = {
  category: string;
  amount: number;
  note: string;
};

const SingleStatDetail = ({ category, amount, note }: Props) => {
  return (
    <Main>
      <div className="icon-container">
        <div className="svg-container">
          <MdFastfood size="25" />
        </div>
      </div>
      <div className="text-container">
        <div className="upper-container">
          <h1>{category}</h1>
          <h3>${amount}</h3>
        </div>
        <div className="bottom-container">
          <h3>{note}</h3>
          <h3>Deutsche-Bank</h3>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;

  a {
    width: 100%;
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;

    .upper-container,
    .bottom-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
    .bottom-container {
      h3 {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.gray_light};
      }
    }

    h1 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
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

export default SingleStatDetail;
