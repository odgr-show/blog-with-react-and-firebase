import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faRightToBracket,
    faFilePen,
} from "@fortawesome/free-solid-svg-icons";

export const NavBer = () => {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                ホーム
            </Link>
            <Link to="/createpost">
                <FontAwesomeIcon icon={faFilePen} />
                記事投稿
            </Link>
            <Link to="/login">
                <FontAwesomeIcon icon={faRightToBracket} />
                ログイン
            </Link>
        </nav>
    );
};
