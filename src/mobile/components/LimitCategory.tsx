import styled from "styled-components";

//Import Icons
import { FaPlus } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { TbJacket } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";

//Import Components
import SingleLimitedCategory from "./SingleLimitedCategory";

const LimitCategory = () => {
  return (
    <Main>
      <SingleLimitedCategory
        categoryName="Eating Out"
        icon={<MdFastfood size={25} />}
        category="eatingOut"
      />
      <SingleLimitedCategory
        categoryName="Groceries"
        icon={<MdShoppingCart size={25} />}
        category="groceries"
      />{" "}
      <SingleLimitedCategory
        categoryName="Electronics"
        icon={<MdVideogameAsset size={25} />}
        category="electronics"
      />{" "}
      <SingleLimitedCategory
        categoryName="Clothes"
        icon={<TbJacket size={25} />}
        category="clothes"
      />{" "}
      <SingleLimitedCategory
        categoryName="Education"
        icon={<FaUniversity size={25} />}
        category="education"
      />
      <div className="add-category">
        <FaPlus size="20" />
        <h3>Add Category</h3>
      </div>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;

  width: 100%;

  margin-top: 2.5rem;

  padding: 1rem;

  .add-category {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    width: 100%;

    color: ${(props) => props.theme.colors.lightblue};

    h3 {
      font-weight: 500;
    }
  }
`;

export default LimitCategory;
