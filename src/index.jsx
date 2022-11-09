import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Calculator from "./pages/Calculator";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/fitness-app/" element={<Home />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
