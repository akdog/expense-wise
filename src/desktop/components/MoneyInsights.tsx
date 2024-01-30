import styled from "styled-components";
import ReGraph from "./ReGraph";
import BarGraph from "./BarGraph";

type Props = {
  title: string;
  amount: string;
};

const MoneyInsights = ({ title, amount }: Props) => {
  return (
    <Main>
      <div className="money-info-header">
        <h1>{title}</h1>
        <h3>This Month</h3>
      </div>
      <h1>{amount}</h1>
      <div className="graph-container">
        <BarGraph />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  padding: 0.8rem;

  width: 30%;

  background: ${(props) => props.theme.Dcolors.contrast};
  border-radius: 20px;

  .money-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    h3 {
      font-weight: 600;
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }

  .graph-container {
    width: 100%;
  }
`;

export default MoneyInsights;
