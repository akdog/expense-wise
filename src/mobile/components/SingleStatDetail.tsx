//Import Icons
import { MdFastfood } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import { MdShoppingCart } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { TbJacket } from "react-icons/tb";
import { FaUniversity, FaCar, FaHome, FaHeart, FaBook } from "react-icons/fa";

import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  category: string;
  amount: number;
  note: string;
};

const SingleStatDetail = ({ category, amount, note }: Props) => {
  const getIconBasedOnType = (categories: string) => {
    switch (categories.toLowerCase()) {
      case "eating out":
        return <MdFastfood size="35" />;
      case "groceries":
        return <MdShoppingCart size="35" />;
      case "games":
        return <MdVideogameAsset size="35" />;
      case "clothes":
        return <TbJacket size="35" />;
      case "education":
        return <FaUniversity size="35" />;
      case "transportation":
        return <FaCar size="35" />;
      case "home":
        return <FaHome size="35" />;
      case "health":
        return <FaHeart size="35" />;
      case "books":
        return <FaBook size="35" />;
      default:
        return <GrStatusUnknown size="35" />;
    }
  };

  const slideInVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <AnimatedStat variants={slideInVariant} initial="hidden" animate="visible">
      <div className="icon-container">
        <div className="svg-container">{getIconBasedOnType(category)}</div>
      </div>
      <div className="text-container">
        <div className="upper-container">
          <h1>{category}</h1>
          <h3>${amount}</h3>
        </div>
        <div className="bottom-container">
          <h3>{note}</h3>
          <h3>Deutsche-Bank</h3>
        </div>
      </div>
    </AnimatedStat>
  );
};

const AnimatedStat = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;

  a {
    width: 100%;
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;

    .upper-container,
    .bottom-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
    .bottom-container {
      h3 {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.gray_light};
      }
    }

    h1 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h3 {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 500;
    }
    .svg-container {
      background: ${(props) => props.theme.colors.lightblue};
      width: 12vw;
      height: 6vh;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
    }
  }
`;

export default SingleStatDetail;
