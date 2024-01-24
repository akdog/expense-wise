import styled from "styled-components";

//Import Componentss
import MoneyInsights from "./MoneyInsights";
import DashboardHeader from "./DashboardHeader";
import TotalExpense from "./TotalExpense";
import TotalBalance from "./TotalBalance";
import SavingGoals from "./SavingGoals";
import TransactionHistory from "./TransactionHistory";
import UsersCard from "./UsersCard";

const Dashboard = () => {
  return (
    <Main>
      <DashboardHeader />
      <div className="dashboard-main">
        <div className="money-insight-main">
          <MoneyInsights title="Total Balance" amount="$2.300" />
          <MoneyInsights title="Income" amount="$2.300" />
          <MoneyInsights title="Expenses" amount="$2.300" />
        </div>
        <div className="money-insight-main">
          <TotalExpense />
          <TotalBalance />
        </div>
        <div className="money-insight-main">
          <SavingGoals />
          <TransactionHistory />
          <UsersCard />
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  height: 100%;

  .dashboard-main {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 6rem;

    width: 100%;

    .money-insight-main {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;

      width: 100%;
    }
  }
`;

export default Dashboard;
