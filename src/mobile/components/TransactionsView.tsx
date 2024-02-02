import styled from "styled-components";

//Import Components
import TransactionCategory from "./TransactionCategory";
import TransactionNotes from "./TransactionNotes";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
};

const TransactionsView = ({ isModal, setIsModal, note, setNote }: Props) => {
  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleModalFalse = () => {
    setIsModal(false);
  };

  return (
    <Main>
      <TransactionCategory handleModal={handleModal} />
      <TransactionNotes
        note={note}
        setNote={setNote}
        handleModalFalse={handleModalFalse}
      />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  width: 100%;
`;

export default TransactionsView;
