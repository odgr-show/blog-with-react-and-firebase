import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import { Home } from "./components/Home";
import { CreatePost } from "./components/CreatePost";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NavBer } from "./components/NavBer";

export const App = () => {
    return (
        <Router>
            <NavBer />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/createpost" element={<CreatePost />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>
        </Router>
    );
};
