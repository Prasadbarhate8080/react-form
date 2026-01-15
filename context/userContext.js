import { createContext } from "react";

let userContext = createContext(
    {
        authStatus:false,
        setAuthStatus: () => {}
    }
)
export {userContext};