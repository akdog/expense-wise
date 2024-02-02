//Import Redux
import { useDispatch } from "react-redux";
import styled from "styled-components";
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
    <Main
      className="modal-icon"
      onClick={() => handleTransactionDetails(iconType, category)}
    >
      <div className="icon-container">{icon}</div>
      <h5>{category}</h5>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  .icon-container {
    width: 15vw;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.colors.primary};
  }
`;

export default IconModal;
