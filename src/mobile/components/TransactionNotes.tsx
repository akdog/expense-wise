import styled from "styled-components";

//Import Icons
import { TbNotes } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
};

const TransactionNotes = ({ note, setNote }: Props) => {
  const handleNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <Main>
      <div className="icon-container">
        <TbNotes size="35" />
        <input
          type="text"
          placeholder="Add Note"
          value={note}
          onChange={handleNote}
        />
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

    width: 100%;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }

    input {
      width: 100%;

      padding: 1rem 0rem;
      border: none;
      background: none;

      text-indent: 1rem;
      font-weight: 600;

      font-size: 1rem;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default TransactionNotes;
