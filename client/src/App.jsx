import React from "react";
import Home from "./pages/Home";
import MyPlans from "./pages/MyPlans";
import Calculator from "./pages/Calculator";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/fitness-app/" element={<Home />} />
        <Route path="/fitness-app/calculator" element={<Calculator />} />
        <Route
          path="/fitness-app/journal"
          element={<Journal/>}
        />
        <Route
          path="/fitness-app/profile"
          element={<Profile/>}
        />
        <Route
          path="/fitness-app/my-plans"
          element={<MyPlans/>}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
