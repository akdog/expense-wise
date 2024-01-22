//Import Components
import SingleSettings from "../components/SingleSettings";

const PersonalSettings = () => {
  return (
    <>
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      <div className="listed-settings">
        <div className="subheader">
          <h3>Personal settings</h3>
        </div>
        <SingleSettings text="Language" />
        <SingleSettings text="Synrochnized bank accounts" />
        <SingleSettings text="Currency" />
        <SingleSettings text="Category rules" />
        <SingleSettings text="Notifications & reminders" />
        <SingleSettings text="Theme" />
      </div>
    </>
  );
};

export default PersonalSettings;
