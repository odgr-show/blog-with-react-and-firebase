import { Link } from "react-router-dom";

import "./NavBar.scss";

import HomeIcon from "@mui/icons-material/Home";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const NavBer = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">
                <HomeIcon />
                Home
            </Link>
            {!isAuth ? (
                <Link to="/login">
                    <LoginIcon />
                    Login
                </Link>
            ) : (
                <>
                    <Link to="/createpost">
                        <NoteAltIcon />
                        Posts
                    </Link>
                    <Link to="/logout">
                        <LogoutIcon />
                        Logout
                    </Link>
                </>
            )}
        </nav>
    );
};
