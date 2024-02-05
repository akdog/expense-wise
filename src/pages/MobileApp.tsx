import { Routes, Route } from "react-router-dom";

//Import Pages
import IncomePage from "../mobile/pages/IncomePage";
import CategoryPage from "../mobile/pages/CategoryPage";
import BudgetPage from "../mobile/pages/BudgetPage";
import CreateBudgetPage from "../mobile/pages/CreateBudgetPage";
import TotalBudgetPage from "../mobile/pages/TotalBudgetPage";
import HomePage from "../mobile/pages/HomePage";
import StatisticsPage from "../mobile/pages/StatisticsPage";
import GoalPage from "../mobile/pages/GoalPage";
import FinishedGoalPage from "../mobile/pages/FinishedGoalPage";
import SettingsPage from "../mobile/pages/SettingsPage";
import TransactionPage from "../mobile/pages/TransactionPage";

const IntroPages = () => {
  return (
    <Routes>
      <Route path="/" element={<IncomePage />} />
      <Route path="category" element={<CategoryPage />} />
      <Route path="budget" element={<BudgetPage />} />
      <Route path="create-budget" element={<CreateBudgetPage />} />
    </Routes>
  );
};

const MobileApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<IntroPages />} />{" "}
      <Route path="/total" element={<TotalBudgetPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/goal" element={<GoalPage />} />
      <Route path="/goal/finished" element={<FinishedGoalPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/transaction" element={<TransactionPage />} />
    </Routes>
  );
};

export default MobileApp;
