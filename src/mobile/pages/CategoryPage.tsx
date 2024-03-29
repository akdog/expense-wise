import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//Import Components
import Header from "../components/Header";
import Text from "../components/Text";
import LimitCategory from "../components/LimitCategory";

//Import Icons
import { FaLongArrowAltRight } from "react-icons/fa";

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/budget");
  };

  return (
    <Main onSubmit={handleSubmit}>
      <Header />
      <Text
        title="You may set some expense limits for each catgory"
        text="We selected your top-5 expense categories last month. You can limit more categories"
      />
      <LimitCategory />
      <div className="button-container">
        <FaLongArrowAltRight color="white" size="25" />
        <ButtonStyled type="submit">Next</ButtonStyled>
      </div>
    </Main>
  );
};

const ButtonStyled = styled.button`
  width: 100%;
  padding: 1rem 0rem;
  border-radius: 10px;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.3rem;
`;

const Main = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem 0.5rem;

  min-height: 100vh;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
    svg {
      width: 5%;
    }
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    margin-top: 3.5rem;

    h2 {
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.primary};
    }
    h4 {
      color: ${(props) => props.theme.colors.gray_light};
      font-weight: 600;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    margin-top: auto;

    position: relative;

    svg {
      position: absolute;
      left: 60%;
    }

    button {
      width: 100%;

      padding: 1rem 0rem;

      border-radius: 10px;
      border: none;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};

      font-size: 1.3rem;
    }
  }
`;

export default CategoryPage;
