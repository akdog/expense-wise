import styled from "styled-components";

type Props = {
  title: string;
  info: string;
  amount: number;
};

const SavingDetails = ({ title, info, amount }: Props) => {
  return (
    <div className="saving-details">
      <h2>{title}</h2>
      <h3>${amount}</h3>
    </div>
  );
};

export default SavingDetails;
