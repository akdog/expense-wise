//Import Icons
import { FaLongArrowAltRight } from "react-icons/fa";

//Import Components
import Button from "./Button";

const ButtonC = () => {
  return (
    <div className="button-container">
      <FaLongArrowAltRight color="white" size="25" />
      <Button type="submit" text="Next" />
    </div>
  );
};

export default ButtonC;
