import styled from "styled-components";

//Import Components
import TransactionCategory from "./TransactionCategory";

//Import Icons
import { MdCallSplit } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransactionsView = ({ isModal, setIsModal }: Props) => {
  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <Main>
      <TransactionCategory handleModal={handleModal} />
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
