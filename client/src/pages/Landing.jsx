import React from "react";
import AppBar from "../commons/AppBar";
import Home from "../commons/Home";


const Landing = () => {
    return (
        <>
        <div className="landing-wrapper">
            <div className="appbar-container">
                <AppBar />
            </div>
            <div className="home-container">
                <Home />
            </div>
        </div>
        </>
    )
}

export default Landing;