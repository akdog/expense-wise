//Import Components
import SingleSettings from "../components/SingleSettings";

//Import Icons
import { MdLanguage } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiCurrencyFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

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
        <SingleSettings text="Language" icon={<MdLanguage size="25" />} />
        <SingleSettings
          text="Synrochnized bank accounts"
          icon={<BsBank2 size="25" />}
        />
        <SingleSettings text="Currency" icon={<RiCurrencyFill size="25" />} />
        <SingleSettings
          text="Category rules"
          icon={<BiSolidCategoryAlt size="25" />}
        />
        <SingleSettings
          text="Notifications & reminders"
          icon={<IoIosNotifications size="25" />}
        />
        <SingleSettings text="Theme" icon={<MdDarkMode size="25" />} />
      </div>
    </>
  );
};

export default PersonalSettings;
