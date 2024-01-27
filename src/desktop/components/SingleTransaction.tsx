type Props = {
  header: string;
  text: string;
  price: string;
};

const SingleTransaction = ({ header, text, price }: Props) => {
  return (
    <div className="single-transaction">
      <div className="transaction-text">
        <h3>{header}</h3>
        <h4>{text}</h4>
      </div>
      <h4>{price}</h4>
    </div>
  );
};

export default SingleTransaction;
