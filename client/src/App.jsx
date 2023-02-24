import React, { useState } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Calculator from "./pages/Calculator";
import MyPlans from "./pages/MyPlans";
import AddPlan from "./pages/AddPlan";
import AllPlans from "./pages/AllPlans";
import EditPlans from "./pages/EditPlans";
import Journal from "./pages/Journal";
import AddEntry from "./pages/AddEntry";
import EditEntry from "./pages/EditEntry";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import serverAPI from "./api/serverAPI";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        serverAPI.get(`/refresh`).then((res) => setUser(res.data));
    }, []);

    return (
        <div className="App">
            <Navbar user={user} setUser={setUser} />
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
                    element={user ? <Navigate to="/" /> : <SignUp />}
                />

                {/* LOGIN */}
                <Route
                    path="/login"
                    element={
                        user ? <Navigate to="/" /> : <Login setUser={setUser} />
                    }
                />

                <Route
                    path="/calculator"
                    element={
                        user ? (
                            <Calculator user={user} setUser={setUser} />
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
                    path="/add-entry"
                    element={
                        user ? (
                            <AddEntry user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />

                <Route
                    path="/edit-entry/:entryId"
                    element={
                        user ? (
                            <EditEntry user={user} />
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
                    path="/add-plan"
                    element={
                        user ? (
                            <AddPlan user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />

                <Route
                    path="/all-plans"
                    element={
                        user ? (
                            <AllPlans user={user} />
                        ) : (
                            <Navigate to="/landing" />
                        )
                    }
                />

                <Route
                    path="/edit-plans/:planId"
                    element={
                        user ? (
                            <EditPlans user={user} />
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
