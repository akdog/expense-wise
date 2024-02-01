import styled from "styled-components";

//Import Icons
import { IoIosCard } from "react-icons/io";

type Props = {
  setTransactionAmount: React.Dispatch<React.SetStateAction<number>>;
  transactionAmount: number;
};

const TransactionHeader = ({
  setTransactionAmount,
  transactionAmount,
}: Props) => {
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionAmount(Number(e.target.value));
  };

  return (
    <Main>
      <h3>Deutsche Bank</h3>
      <input
        placeholder="100$"
        value={transactionAmount}
        onChange={handleAmount}
      />
      <div className="bank-details">
        <IoIosCard size="25" />
        <h3>Deutsche-Bank</h3>
      </div>
      <p>27 March 2023 17:15</p>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  h3 {
    color: ${(props) => props.theme.colors.primary};
  }

  input {
    width: 40%;
    padding: 1.5rem 0rem;

    color: ${(props) => props.theme.colors.primary};
    font-size: 1.6rem;

    border: none;
    outline: none;
    background: none;

    text-indent: 25%;
  }

  h2 {
    color: ${(props) => props.theme.colors.primary};
  }

  .bank-details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray_light};
  }
`;

export default TransactionHeader;
