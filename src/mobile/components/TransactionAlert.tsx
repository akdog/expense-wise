import styled from "styled-components";

//Import Icons
import { IoCheckmarkDone } from "react-icons/io5";

type Props = {
  alertType: string;
};

const TransactionAlert = ({ alertType }: Props) => {
  if (alertType === "error") {
    return (
      <Error>
        <IoCheckmarkDone size="25" color="#852323" />
        <h1>This is a Error Alert</h1>
      </Error>
    );
  }

  return (
    <Success>
      <IoCheckmarkDone size="25" color="#238523" />
      <h1>This is a success Alert</h1>
    </Success>
  );
};

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: #280202;
  border-radius: 10px;

  padding: 1rem;

  h1 {
    font-size: 1.3rem;
    color: #852323;
  }
`;

const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: #022802;
  border-radius: 10px;

  padding: 1rem;

  h1 {
    font-size: 1.3rem;
    color: #238523;
  }
`;

export default TransactionAlert;
