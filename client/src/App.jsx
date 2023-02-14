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
import { useState } from "react";
import Feedback from "./components/Feedback";
import { Navigate } from "react-router-dom";

const App = () => {
    const API_URL = "http://localhost:3000";

    const [user, setUser] = useState(null);
    console.log(user)

    return (
        <div className="App">
            <Navbar user={user} />
            <Routes>
                <Route
                    path="/fitness-app/landing"
                    element={
                        user ? <Navigate to="/fitness-app/" /> : <Landing />
                    }
                />
                <Route
                    path="/fitness-app/"
                    element={
                        user ? (
                            <Home user={user} />
                        ) : (
                            <Navigate to="/fitness-app/landing" />
                        )
                    }
                />
                <Route path="/fitness-app/sign-up" element={<SignUp />} />
                <Route
                    path="/fitness-app/login"
                    element={<Login API_URL={API_URL} setUser={setUser}/>}
                />
                <Route
                    path="/fitness-app/calculator"
                    element={
                        user ? (
                            <Calculator />
                        ) : (
                            <Navigate to="/fitness-app/landing" />
                        )
                    }
                />
                <Route
                    path="/fitness-app/journal"
                    element={
                        user ? (
                            <Journal user={user} />
                        ) : (
                            <Navigate to="/fitness-app/landing" />
                        )
                    }
                />
                <Route
                    path="/fitness-app/profile"
                    element={
                        user ? (
                            <Profile setUser={setUser} user={user} />
                        ) : (
                            <Navigate to="/fitness-app/landing" />
                        )
                    }
                />
                <Route
                    path="/fitness-app/my-plans"
                    element={
                        user ? (
                            <MyPlans user={user} />
                        ) : (
                            <Navigate to="/fitness-app/landing" />
                        )
                    }
                />
                <Route
                    path="/fitness-app/feedback"
                    element={
                        user ? (
                            <Feedback user={user} />
                        ) : (
                            <Navigate to="/fitness-app/landing" />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
