import styled from "styled-components";

const UsersCard = () => {
  return (
    <Main>
      <div className="users-header">
        <h1>My Cards</h1>
        <h3>Add New</h3>
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 25%;
  height: 100%;

  .users-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default UsersCard;
