"use client";
import { Switch } from "../ui/switch";
type ProfileActionToggleProps = {
  children?: any;
  toggleState: boolean;
  handleOnToggle: Function;
};
const ProfileActionToggle = ({
  toggleState,
  handleOnToggle,
  children,
}: ProfileActionToggleProps) => {
  return (
    <div className="flex justify-between items-center  mt-2">
      <div className="flex items-center gap-4">
        {children}
      </div>
      <Switch
        onClick={() => handleOnToggle(!toggleState)}
        checked={toggleState}
      />
    </div>
  );
};

export default ProfileActionToggle;
