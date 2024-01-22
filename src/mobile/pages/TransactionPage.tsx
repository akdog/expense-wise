import styled from "styled-components";

//Import Components
import PageHeader from "../components/PageHeader";

const TransactionPage = () => {
  return (
    <Main>
      <PageHeader title="Transaction" />
      <div className="transaction-header">
        <h3>United24</h3>
        <h2>$100</h2>
        <div className="bank-details">
          <h3>Icon</h3>
          <h3>UnitedPrivateBank</h3>
        </div>
        <p>27 March 2023 17:15</p>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;

  .transaction-header {
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
    }

    p {
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default TransactionPage;
