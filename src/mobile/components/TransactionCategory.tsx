import styled from "styled-components";

//Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { GrStatusUnknown } from "react-icons/gr";

type Props = {
  handleModal: () => void;
};

const TransactionCategory = ({ handleModal }: Props) => {
  return (
    <Main onClick={handleModal}>
      <div className="icon-container">
        <GrStatusUnknown size="35" />
        <h3>Uncategorized transactions</h3>
      </div>
      <IoIosArrowForward size="25" />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default TransactionCategory;
