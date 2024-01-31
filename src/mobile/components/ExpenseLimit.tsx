import { MdFastfood } from "react-icons/md";

type Props = {
  category: string;
  limit: number;
};

const ExpenseLimit = ({ category, limit }: Props) => {
  return (
    <div className="budget-inside">
      <div className="icon-container">
        <MdFastfood size="25" />
      </div>
      <div className="text-container">
        <div className="text-header">
          <h1>{category}</h1>
          <h1>{limit}$</h1>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExpenseLimit;
