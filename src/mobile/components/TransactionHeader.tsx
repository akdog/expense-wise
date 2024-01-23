import styled from "styled-components";

//Import Icons
import { IoIosCard } from "react-icons/io";

const TransactionHeader = () => {
  return (
    <Main>
      <h3>United24</h3>
      <h2>$100</h2>
      <div className="bank-details">
        <IoIosCard size="25" />
        <h3>UnitedPrivateBank</h3>
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
