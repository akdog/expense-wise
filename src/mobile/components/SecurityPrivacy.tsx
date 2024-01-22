//Import Components
import SingleSettings from "../components/SingleSettings";

const SecurityPrivacy = () => {
  return (
    <>
      <div className="listed-settings">
        <div className="subheader">
          <h3>Security & Privacy</h3>
        </div>
        <SingleSettings text="Password and Login" />
        <SingleSettings text="Account Information" />
        <SingleSettings text="Privacy Data" />
        <SingleSettings text="Security" />
      </div>
    </>
  );
};

export default SecurityPrivacy;
