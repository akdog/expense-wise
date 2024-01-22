import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  pageNumber?: number;
};

const Button = ({ text, pageNumber }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const nextPage = `/${pageNumber + 1}`;
    navigate(nextPage);
  };

  return <ButtonStyled onClick={handleNavigate}>{text}</ButtonStyled>;
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
