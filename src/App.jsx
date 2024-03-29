import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import { Home } from "./components/Home";
import { CreatePost } from "./components/CreatePost";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NavBer } from "./components/NavBer";

export const App = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    return (
        <Router>
            <NavBer isAuth={isAuth} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/CreatePost" element={<CreatePost />}></Route>
                <Route
                    path="/login"
                    element={<Login setIsAuth={setIsAuth} />}
                ></Route>
                <Route
                    path="/logout"
                    element={<Logout setIsAuth={setIsAuth} />}
                ></Route>
            </Routes>
        </Router>
    );
};
