import { Link } from "react-router-dom";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faRightToBracket,
    faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export const NavBer = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
            </Link>
            {!isAuth ? (
                <Link to="/login">
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Login
                </Link>
            ) : (
                <>
                    <Link to="/createpost">
                        <FontAwesomeIcon icon={faFilePen} />
                        Posts
                    </Link>
                    <Link to="/logout">
                        <FontAwesomeIcon icon={faRightToBracket} />
                        Logout
                    </Link>
                </>
            )}
        </nav>
    );
};
