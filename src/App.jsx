import React from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import MyPlans from "./pages/MyPlans";
import Calculator from "./pages/Calculator";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Feedback from "./components/Feedback";
import { Navigate } from "react-router-dom";

const App = () => {
    const API_URL = "https://fitness-api-gssp.onrender.com";

    const [user, setUser] = useState(null);

    // Check if user is signed in
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "https://fitness-api-gssp.onrender.com/profile",
        }).then((res) => setUser(res.data.user));
    }, []);

    return (
        <div className="App">
            <Navbar user={user} />
            <Routes>
                <Route
                    path="/landing"
                    element={
                        user ? <Navigate to="/" /> : <Landing />
                    }
                />
                <Route
                    path="/"
                    element={
                        user ? (
                            <Home user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                    path="/login"
                    element={<Login API_URL={API_URL} setUser={setUser}/>}
                />
                <Route
                    path="/calculator"
                    element={
                        user ? (
                            <Calculator />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route
                    path="/journal"
                    element={
                        user ? (
                            <Journal user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route
                    path="/profile"
                    element={
                        user ? (
                            <Profile setUser={setUser} user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route
                    path="/my-plans"
                    element={
                        user ? (
                            <MyPlans user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route
                    path="/feedback"
                    element={
                        user ? (
                            <Feedback user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
