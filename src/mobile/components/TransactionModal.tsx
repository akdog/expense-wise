import styled from "styled-components";

//Import Components
import IconModal from "./IconModal";

const TransactionModal = () => {
  return (
    <Main>
      <div className="modal-header">
        <h3>Select Category</h3>
        <h4>Cancel</h4>
      </div>
      <div className="modal-categories">
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
        <IconModal />
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 40%;

  background: green;
  border-radius: 10px 10px 0px 0px;

  position: absolute;
  bottom: 0%;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    margin: 0 auto;
  }

  .modal-categories {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    width: 90%;
    margin: 0 auto;

    .modal-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export default TransactionModal;
