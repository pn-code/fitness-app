import React, { useState } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import MyPlans from "./pages/MyPlans";
import Calculator from "./pages/Calculator";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Feedback from "./components/Feedback";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {
    const API_URL = "http://localhost:3000";

    const [user, setUser] = useState(null);

    return (
        <div className="App">
            <Navbar user={user} />
            <Routes>
                {/* LANDING */}
                <Route
                    path="/landing"
                    element={user ? <Navigate to="/" /> : <Landing />}
                />

                {/* HOME */}
                <Route
                    path="/"
                    element={
                        user ? <Home user={user} /> : <Navigate to="/landing" />
                    }
                />

                {/* SIGN UP */}
                <Route
                    path="/sign-up"
                    element={user ? <Navigate to="/" /> : <SignUp API_URL={API_URL}/>}
                />

                {/* LOGIN */}
                <Route
                    path="/login"
                    element={
                        user ? (
                            <Navigate to="/" />
                        ) : (
                            <Login API_URL={API_URL} setUser={setUser} />
                        )
                    }
                />

                <Route
                    path="/calculator"
                    element={
                        user ? (
                            <Calculator user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />

                <Route
                    path="/journal"
                    element={
                        user ? (
                            <Journal user={user} API_URL={API_URL} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />

                <Route
                    path="/profile"
                    element={
                        user ? (
                            <Profile setUser={setUser} user={user} API_URL={API_URL}/>
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route
                    path="/my-plans"
                    element={
                        user ? (
                            <MyPlans user={user} API_URL={API_URL}/>
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />
                <Route
                    path="/feedback"
                    element={
                        user ? (
                            <Feedback user={user} API_URL={API_URL}/>
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
