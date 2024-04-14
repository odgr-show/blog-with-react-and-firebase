// import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import "./Login.scss";

export const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginInWithGoogle = () => {
        // Googleでログイン
        signInWithPopup(auth, provider).then(() => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };
    return (
        <div className="login">
            <div className="login__box">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-box">
                        <span className="icon">
                            <EmailIcon />
                        </span>
                        <input type="email" required />
                        <label htmlFor="">Email</label>
                    </div>

                    <div className="input-box">
                        <span className="icon">
                            <LockIcon />
                        </span>
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>

                    <div className="remember-forget">
                        <label htmlFor="">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forget Password?</a>
                    </div>
                    <button className="postButton" onClick={loginInWithGoogle}>
                        <span>Login</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1, 5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                    <div className="register-link">
                        <p>
                            Don't have an account?
                            <a href="#">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};
