import styled from "styled-components";

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
      <h1>Graph</h1>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;

  width: 30%;

  .money-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      font-weight: 600;
    }

    h3 {
      font-weight: 600;
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default MoneyInsights;
