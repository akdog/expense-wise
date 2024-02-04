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
      case "fauniversity":
        return <FaUniversity size="35" />;
      case "facar":
        return <FaCar size="35" />;
      case "fahome":
        return <FaHome size="35" />;
      case "faheart":
        return <FaHeart size="35" />;
      case "fabook":
        return <FaBook size="35" />;
      default:
        return <FaHome size="35" />;
    }
  };

  return (
    <Main>
      <h1>{getIconBasedOnType(note)}</h1>
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
