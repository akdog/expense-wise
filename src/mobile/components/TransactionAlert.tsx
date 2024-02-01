import styled from "styled-components";

//Import Icons
import { IoCheckmarkDone } from "react-icons/io5";

const TransactionAlert = () => {
  return (
    <Success>
      <IoCheckmarkDone size="25" color="#238523" />
      <h1>This is a success Alert</h1>
    </Success>
  );
};

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
