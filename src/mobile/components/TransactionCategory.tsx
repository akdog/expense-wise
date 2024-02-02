import styled from "styled-components";

//Import Icons
import { IoIosArrowForward } from "react-icons/io";
import { GrStatusUnknown } from "react-icons/gr";
import { MdFastfood } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { TbJacket } from "react-icons/tb";
import { FaUniversity, FaCar, FaHome, FaHeart, FaBook } from "react-icons/fa";

//Import Redux
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

type Props = {
  handleModal: () => void;
};

const TransactionCategory = ({ handleModal }: Props) => {
  const state = useSelector((state: RootState) => state.transaction);

  const getIconBasedOnType = (iconType: string) => {
    switch (iconType.toLowerCase()) {
      case "mdfastfood":
        return <MdFastfood size="35" />;
      case "mdshoppingcart":
        return <MdShoppingCart size="35" />;
      case "mdvideogameasset":
        return <MdVideogameAsset size="35" />;
      case "tbjacket":
        return <TbJacket size="35" />;
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
        return <GrStatusUnknown size="35" />;
    }
  };

  return (
    <Main onClick={handleModal}>
      <div className="icon-container">
        {getIconBasedOnType(state.iconType)}
        {state.iconType === "" ? (
          <h3>Uncategorized transactions</h3>
        ) : (
          <h3>{state.category}</h3>
        )}
      </div>
      <IoIosArrowForward size="25" />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray_light};
    }
  }
`;

export default TransactionCategory;
