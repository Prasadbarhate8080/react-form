import React, { useState } from "react";
import { userContext } from "./userContext";

function ContextProvider({ children }) {
  let [authStatus, setAuthStatus] = useState(false);
  return (
    <userContext.Provider value={{ authStatus, setAuthStatus }}>
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
