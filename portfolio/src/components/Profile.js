import { useState, useContext } from "react";
import { ChangeProfile } from "./ChangeProfile";
import App, { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);

  const [newUser, setNewUser] = useState("");
  return (
    <div>
      {" "}
      Profile of {username}
      <ChangeProfile />
    </div>
  );
};
