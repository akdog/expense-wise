//Import Icons
import { FaLongArrowAltRight } from "react-icons/fa";

//Import Components
import Button from "./Button";

type Props = {
  pageNumberAsNumber: number;
};

const ButtonC = ({ pageNumberAsNumber }: Props) => {
  return (
    <div className="button-container">
      <FaLongArrowAltRight color="white" size="25" />
      <Button type="submit" text="Next" pageNumber={pageNumberAsNumber} />
    </div>
  );
};

export default ButtonC;
