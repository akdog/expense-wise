//Import Pages
import IncomePage from "../mobile/pages/IncomePage";
import CategoryPage from "../mobile/pages/CategoryPage";
import BudgetPage from "../mobile/pages/BudgetPage";
import AlertPage from "../mobile/pages/AlertPage";
import CreateBudgetPage from "../mobile/pages/CreateBudgetPage";
import TotalBudgetPage from "../mobile/pages/TotalBudgetPage";
import HomePage from "../mobile/pages/HomePage";
import StatisticsPage from "../mobile/pages/StatisticsPage";

const MobileApp = () => {
  return (
    <>
      <IncomePage />
      <CategoryPage />
      <BudgetPage />
      <AlertPage />
      <CreateBudgetPage />
      <TotalBudgetPage />
      <HomePage />
      <StatisticsPage />
    </>
  );
};

export default MobileApp;
