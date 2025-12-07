import { createContext, useContext, useMemo, useState, } from "react";

const AuthContext = createContext<any>(null);

export function AuthStateProvider(props:any) {
    const [token, updateToken] = useState<string | null>(localStorage.getItem("token"));
    const [user, updateUser] = useState<string | null>(localStorage.getItem("user"));
    const [isAuthencated, updateState] = useState<boolean>(localStorage.getItem("token") !== null);

    function SignIn(newToken: string, userName: string) {
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", userName);
        updateToken(newToken);
        updateUser(userName);
        updateState(true);
    }
    function SignOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        updateToken(null);
        updateUser(null);
        updateState(false);
    }

    const contextState = useMemo(() => ({
        SignIn, SignOut,
        token, user, isAuthencated

    }), [token, user, isAuthencated])

    return <AuthContext.Provider value={contextState}>{props.children}</AuthContext.Provider>
}
export default function GetAuthContext() {
    return useContext(AuthContext);
}

