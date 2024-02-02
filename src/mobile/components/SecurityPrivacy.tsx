//Import Components
import SingleSettings from "../components/SingleSettings";

//Import Icons
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidUserAccount } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

const SecurityPrivacy = () => {
  return (
    <>
      <div className="listed-settings">
        <div className="subheader">
          <h3>Security & Privacy</h3>
        </div>
        <SingleSettings
          text="Password and Login"
          icon={<RiLockPasswordFill size="25" />}
        />
        <SingleSettings
          text="Account Information"
          icon={<BiSolidUserAccount size="25" />}
        />
        <SingleSettings text="Privacy Data" icon={<MdPrivacyTip size="25" />} />
        <SingleSettings text="Security" icon={<MdSecurity size="25" />} />
      </div>
    </>
  );
};

export default SecurityPrivacy;
