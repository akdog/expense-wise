//Import Icons
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  title: string;
  amount: string;
  className: string;
  svgID: string;
  insideClassName: string;
};

const HomeStatsExpend = ({
  title,
  amount,
  className,
  svgID,
  insideClassName,
}: Props) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className={insideClassName}>
        <h2>{amount}</h2>
        <MdKeyboardArrowRight id={svgID} size="30" />
      </div>
    </div>
  );
};

export default HomeStatsExpend;
