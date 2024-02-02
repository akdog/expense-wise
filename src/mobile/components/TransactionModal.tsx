import styled from "styled-components";

//Import Components
import IconModal from "./IconModal";

//Import Icons
import { MdFastfood } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { TbJacket } from "react-icons/tb";
import { FaUniversity, FaCar, FaHome, FaHeart, FaBook } from "react-icons/fa";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransactionModal = ({ isModal, setIsModal }: Props) => {
  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <Main>
      <div className="modal-header">
        <h3>Select Category</h3>
        <h4 onClick={handleModal}>Cancel</h4>
      </div>
      <div className="modal-categories">
        <IconModal
          icon={<MdFastfood size={30} />}
          category="Eating Out"
          iconType="MdFastFood"
        />
        <IconModal
          icon={<MdShoppingCart size={30} />}
          category="Groceries"
          iconType="MdShoppingCart"
        />
        <IconModal
          icon={<MdVideogameAsset size={30} />}
          category="Games"
          iconType="MdVideogameAsset"
        />
        <IconModal
          icon={<TbJacket size={30} />}
          category="Clothes"
          iconType="TbJacket"
        />
        <IconModal
          icon={<FaUniversity size={30} />}
          category="Education"
          iconType="FaUniversity"
        />
        <IconModal
          iconType="FaCar"
          icon={<FaCar size={30} />}
          category="Transportation"
        />
        <IconModal
          iconType="FaHome"
          icon={<FaHome size={30} />}
          category="Home"
        />
        <IconModal
          iconType="FaHeart"
          icon={<FaHeart size={30} />}
          category="Health"
        />
        <IconModal
          iconType="FaBook"
          icon={<FaBook size={30} />}
          category="Books"
        />
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

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
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
  }
`;

export default TransactionModal;
