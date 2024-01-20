type Props = {
  title: string;
  text: string;
};

const Text = ({ title, text }: Props) => {
  return (
    <div className="text-container">
      <h2>{title}</h2>
      <h4>{text}</h4>
    </div>
  );
};

export default Text;
