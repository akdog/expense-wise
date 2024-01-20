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
      <h3>{text}</h3>
    </header>
  );
};

export default Header;
