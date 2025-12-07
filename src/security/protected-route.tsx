import { Navigate, Outlet } from "react-router";
import GetAuthContext from "./auth-state-provider";

export default function ProtectedRoute() {

    const { isAuthencated } = GetAuthContext();

    if (isAuthencated) {
        return <Outlet />
    }
    else {
        return <Navigate to="/login"/>
    }
}