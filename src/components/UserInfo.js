import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

function UserInfo() {
  const {
    providerValue: { userData = [] },
  } = useContext(AppContext);
  return (
    <div className="box-user">
      <strong> {userData.name}</strong> :: {userData.points}💰
    </div>
  );
}

export default UserInfo;
