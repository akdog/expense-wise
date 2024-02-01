//Import Redux
import { useDispatch } from "react-redux";
import { handleTransactionCategory } from "../../state/transaction/transactionSlice";

type Props = {
  icon: React.ReactNode;
  iconType: string;
  category: string;
};

const IconModal = ({ icon, category, iconType }: Props) => {
  const dispatch = useDispatch();

  const handleTransactionDetails = (iconType: string, category: string) => {
    dispatch(handleTransactionCategory({ iconType, category }));
  };

  return (
    <div
      className="modal-icon"
      onClick={() => handleTransactionDetails(iconType, category)}
    >
      {icon}
      <h5>{category}</h5>
    </div>
  );
};

export default IconModal;
