import React from "react";
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
                ホーム
            </Link>
            <Link to="/createpost">
                <FontAwesomeIcon icon={faFilePen} />
                記事投稿
            </Link>
            {!isAuth ? (
                <Link to="/login">
                    <FontAwesomeIcon icon={faRightToBracket} />
                    ログイン
                </Link>
            ) : (
                <Link to="/logout">
                    <FontAwesomeIcon icon={faRightToBracket} />
                    ログアウト
                </Link>
            )}
        </nav>
    );
};
