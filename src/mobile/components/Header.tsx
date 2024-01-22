import { Link } from "react-router-dom";

//Import Icons
import { RxCross1 } from "react-icons/rx";

type Props = {
  text?: string;
};

const Header = ({ text }: Props) => {
  return (
    <header className="header">
      <RxCross1 size="25" />
      <h1>Monthly Budget</h1>
      <Link to="/home">
        <h3>{text}</h3>
      </Link>
    </header>
  );
};

export default Header;
