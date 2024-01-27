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
        <div className="money-insight-main top">
          <MoneyInsights title="Total Balance" amount="$2.300" />
          <MoneyInsights title="Income" amount="$2.300" />
          <MoneyInsights title="Expenses" amount="$2.300" />
        </div>
        <div className="money-insight-main middle">
          <TotalExpense />
          <TotalBalance />
        </div>
        <div className="money-insight-main bottom">
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
  gap: 1rem;

  width: 100%;
  height: 100%;

  .dashboard-main {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    .money-insight-main {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      width: 100%;
    }
    .middle {
      width: 96%;
      margin: 0 auto;
    }
    .bottom {
      width: 92%;
      margin: 0 auto;

      margin-bottom: 2rem;
    }
  }
`;

export default Dashboard;
