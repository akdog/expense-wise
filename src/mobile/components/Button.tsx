import styled from "styled-components";

const Button = () => {
  return <ButtonStyled>text</ButtonStyled>;
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

export default Button;
