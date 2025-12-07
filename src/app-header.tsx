
import { NavLink } from "react-router";
import GetAuthContext from "./security/auth-state-provider";
export default function AppHeader(props: any) {

    const { user, isAuthencated, SignOut } = GetAuthContext();

    return (
        <header>

            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">React App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" end >
                                    Author List
                                </NavLink>
                            </li>
                            {isAuthencated && <>
                                <li className="nav-item">
                                    <NavLink to="/create" className="nav-link" end>
                                        Create
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/profile" className="nav-link" end>
                                        Hello, {user}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button onClick={SignOut} className="nav-link" >
                                        Logout
                                    </button>
                                </li>

                            </>}

                            {!isAuthencated && <>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" end>
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link" end>
                                        Register
                                    </NavLink>
                                </li>

                            </>}


                        </ul>

                    </div>
                </div>
            </nav>

        </header>

    );
}
