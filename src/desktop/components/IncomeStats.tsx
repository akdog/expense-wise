import styled from "styled-components";
import AreaGraph from "./AreaGraph";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const IncomeStats = () => {
  const stateIncome = useSelector((state: RootState) => state.income);

  const incomeData = [
    { name: "January", uv: stateIncome.income },
    { name: "Feburary", uv: stateIncome.income - 200 },
    { name: "March", uv: stateIncome.income + 280 },
    { name: "April", uv: stateIncome.income + 330 },
  ];

  return (
    <Main>
      <div className="income-header">
        <h1>Income</h1>
        <h2>${stateIncome.income}</h2>
      </div>
      <AreaGraph data={incomeData} />
    </Main>
  );
};

const Main = styled.div`
  background: linear-gradient(to right, #285495, #7f2c9c);
  padding: 0.5rem;
  height: 30vh;
  width: 100%;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .income-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      color: white;
      font-size: 1.5rem;
      font-weight: 500;
    }
    h2 {
      color: white;
    }
  }
`;

export default IncomeStats;
