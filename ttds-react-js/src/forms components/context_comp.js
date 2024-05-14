import React, { useState, createContext } from "react";
import ChildContextOne from "./child_context_one";
import ChildContextTwo from "./child_context_two";
import FormsMain from "./forms_main";
export const UserContext = createContext();
const ContextComp = () => {
  const [user, userUpdated] = useState("No Name");
  return (
    <UserContext.Provider value={user}>
      <div>
        <input onChange={(e) => userUpdated(e.target.value)} />
        <p style={{backgroundColor:'yellow'}}>{user}</p>
        <ChildContextOne user={user} />
        <ChildContextTwo user={user} />
        <FormsMain></FormsMain>
      </div>
    </UserContext.Provider>
  );
};

export default ContextComp;
