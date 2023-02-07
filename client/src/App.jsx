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

const App = () => {
    const API_URL = "http://localhost:3000";

    const [user, setUser] = useState(null);

    // Check if user is signed in
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:3000/profile'
        }).then(res => setUser(res.data.user))
    }, []);

    return (
        <div className="App">
            <Navbar user={user}/>
            <Routes>
                <Route path="/fitness-app/" element={<Home user={user}/>} />
                <Route path="/fitness-app/landing" element={<Landing />} />
                <Route path="/fitness-app/sign-up" element={<SignUp />} />
                <Route
                    path="/fitness-app/login"
                    element={
                        <Login API_URL={API_URL}/>
                    }
                />
                <Route
                    path="/fitness-app/calculator"
                    element={<Calculator />}
                />
                <Route path="/fitness-app/journal" element={<Journal user={user}/>} />
                <Route path="/fitness-app/profile" element={<Profile setUser={setUser} user={user}/>} />
                <Route path="/fitness-app/my-plans" element={<MyPlans user={user}/>} />
                <Route path="/fitness-app/feedback" element={<Feedback user={user}/>} />
            </Routes>
        </div>
    );
};

export default App;
