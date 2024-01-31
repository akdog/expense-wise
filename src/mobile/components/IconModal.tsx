//Import Redux
import { useDispatch } from "react-redux";
import { handleTransaction } from "../../state/transaction/transactionSlice";

type Props = {
  icon: React.ReactNode;
  iconType: string;
  category: string;
};

const IconModal = ({ icon, category, iconType }: Props) => {
  const dispatch = useDispatch();

  const handleTransactionDetails = (iconType: string, category: string) => {
    dispatch(handleTransaction({ category, iconType }));
  };

  return (
    <div
      className="modal-icon"
      onClick={() => handleTransactionDetails(category, iconType)}
    >
      {icon}
      <h5>{category}</h5>
    </div>
  );
};

export default IconModal;
