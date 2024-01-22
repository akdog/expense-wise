import { Link } from "react-router-dom";
import styled from "styled-components";

//Import Icons
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <Main>
      <div className="icon-container">
        <Link to="/home">
          <MdOutlineKeyboardArrowLeft size="55" id="header-icon" />
        </Link>
      </div>
      <div className="text-container">
        <h1>{title}</h1>
      </div>
    </Main>
  );
};

const Main = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .icon-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 8%;
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
`;

export default PageHeader;
