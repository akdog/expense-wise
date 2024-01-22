type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
