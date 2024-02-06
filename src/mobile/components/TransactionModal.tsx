import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      {isModal && (
        <ModalContainer
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}>
          <div className="modal-header">
            <h3>Select Category</h3>
            <h4 onClick={handleModal}>Cancel</h4>
          </div>
          <div className="modal-categories">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                icon={<MdFastfood size={30} />}
                category="Eating Out"
                iconType="MdFastFood"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                icon={<MdShoppingCart size={30} />}
                category="Groceries"
                iconType="MdShoppingCart"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                icon={<MdVideogameAsset size={30} />}
                category="Games"
                iconType="MdVideogameAsset"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                icon={<TbJacket size={30} />}
                category="Clothes"
                iconType="TbJacket"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                icon={<FaUniversity size={30} />}
                category="Education"
                iconType="FaUniversity"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                iconType="FaCar"
                icon={<FaCar size={30} />}
                category="Transportation"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                iconType="FaHome"
                icon={<FaHome size={30} />}
                category="Home"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                iconType="FaHeart"
                icon={<FaHeart size={30} />}
                category="Health"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconModal
                iconType="FaBook"
                icon={<FaBook size={30} />}
                category="Books"
              />
            </motion.div>
          </div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

const ModalContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 30%;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  border-radius: 10px 10px 0px 0px;

  position: absolute;
  bottom: 0%;

  color: ${(props) => props.theme.colors.primary};

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
