import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  pageNumber?: number;
  type: string;
};

const Button = ({ text, pageNumber, type }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const nextPage = `/${pageNumber + 1}`;
    navigate(nextPage);
  };

  return (
    <ButtonStyled type={type} onClick={handleNavigate}>
      {text}
    </ButtonStyled>
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

export default Button;
