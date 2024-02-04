type Props = {
  icon: React.ReactNode;
  name: string;
  setEmoji: React.Dispatch<React.SetStateAction<string>>;
  iconName: string;
};

const SavingIcons = ({ icon, name, setEmoji, iconName }: Props) => {
  const handleIcon = (iconName: string) => {
    setEmoji(iconName);
  };

  return (
    <div className="icon-container" onClick={() => handleIcon(iconName)}>
      {icon}
      <h3>{name}</h3>
    </div>
  );
};

export default SavingIcons;
