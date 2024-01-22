//Import Icons
import { MdArrowForwardIos } from "react-icons/md";

type Props = {
  text: string;
};

const SingleSettings = ({ text }: Props) => {
  return (
    <div>
      <div className="single-setting">
        <div className="icon-container">
          <h4>Icon</h4>
          <h3>{text}</h3>
        </div>
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default SingleSettings;
