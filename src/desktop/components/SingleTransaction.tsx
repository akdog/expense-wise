import styled from "styled-components";

//Import Icons
import { FaUniversity, FaCar, FaHome, FaHeart, FaBook } from "react-icons/fa";

type Props = {
  info: string;
  note: string;
  amount: number;
};

const SingleTransaction = ({ info, note, amount }: Props) => {
  const getIconBasedOnType = (categories: string) => {
    switch (categories.toLowerCase()) {
      case "uni":
        return <FaUniversity size="35" />;
      case "car":
        return <FaCar size="35" />;
      case "home":
        return <FaHome size="35" />;
      case "health":
        return <FaHeart size="35" />;
      case "book":
        return <FaBook size="35" />;
      default:
        return <FaHome size="35" />;
    }
  };

  return (
    <Main>
      <h1>{getIconBasedOnType(info)}</h1>
      <h3>{info}</h3>
      <h4>{note}</h4>
      <h3>${amount}</h3>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }
  h4 {
    font-weight: 500;
  }
`;

export default SingleTransaction;
