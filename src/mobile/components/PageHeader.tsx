import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Import Icons
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type Props = {
  title: string;
  action?: string;
  isAlert: boolean;
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
  alertType?: string;
};

const PageHeader = ({
  title,
  action,
  isAlert,
  setIsAlert,
  alertType,
}: Props) => {
  const notify = () => {
    switch (alertType) {
      case "success":
        toast.success("Transaction successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case "error":
        toast.error("Transaction failed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case "warning":
        toast.warning("Transaction: Not enough budget!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      default:
        break;
    }
  };

  const handleAlert = () => {
    setIsAlert(!isAlert);
    notify();
  };

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
      <div className="action-container">
        <button type="submit" onClick={handleAlert}>
          {action}
        </button>
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

    width: 15%;
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .action-container {
    button {
      border: none;
      background: none;

      color: ${(props) => props.theme.colors.lightblue};
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export default PageHeader;
