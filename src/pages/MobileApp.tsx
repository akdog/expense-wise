import { Routes, Route, useParams } from "react-router-dom";

//Import Pages
import IncomePage from "../mobile/pages/IncomePage";
import CategoryPage from "../mobile/pages/CategoryPage";
import BudgetPage from "../mobile/pages/BudgetPage";
import AlertPage from "../mobile/pages/AlertPage";
import CreateBudgetPage from "../mobile/pages/CreateBudgetPage";
import TotalBudgetPage from "../mobile/pages/TotalBudgetPage";
import HomePage from "../mobile/pages/HomePage";
import StatisticsPage from "../mobile/pages/StatisticsPage";
import CategoryStatePage from "../mobile/pages/CategoryStatePage";
import GoalPage from "../mobile/pages/GoalPage";
import FinishedGoalPage from "../mobile/pages/FinishedGoalPage";
import SettingsPage from "../mobile/pages/SettingsPage";
import TransactionPage from "../mobile/pages/TransactionPage";

const IntroPages = () => {
  const params = useParams();
  const pageNumber = params ? Object.values(params)[0] : "1";
  const pageNumberAsNumber = parseInt(pageNumber, 10);
  console.log(pageNumberAsNumber);

  return (
    <Routes>
      <Route
        path="1"
        element={<IncomePage pageNumberAsNumber={pageNumberAsNumber} />}
      />
      <Route
        path="2"
        element={<CategoryPage pageNumberAsNumber={pageNumberAsNumber} />}
      />
      <Route
        path="3"
        element={<BudgetPage pageNumberAsNumber={pageNumberAsNumber} />}
      />
      <Route
        path="4"
        element={<AlertPage pageNumberAsNumber={pageNumberAsNumber} />}
      />
      <Route path="5" element={<CreateBudgetPage />} />
    </Routes>
  );
};

const MobileApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<IntroPages />} />
      <Route path="/total" element={<TotalBudgetPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/category-state" element={<CategoryStatePage />} />
      <Route path="/goal" element={<GoalPage />} />
      <Route path="/goal/finished" element={<FinishedGoalPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/transaction" element={<TransactionPage />} />
    </Routes>
  );
};

export default MobileApp;
