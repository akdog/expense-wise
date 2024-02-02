//Import Icons
import { MdArrowForwardIos } from "react-icons/md";

type Props = {
  text: string;
  icon: React.ReactNode;
};

const SingleSettings = ({ text, icon }: Props) => {
  return (
    <div>
      <div className="single-setting">
        <div className="icon-container">
          {icon}
          <h3>{text}</h3>
        </div>
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default SingleSettings;
