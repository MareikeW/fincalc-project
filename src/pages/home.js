import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
    

    return (
        <div>
            <NavBar />
            <div class = "home-hero">
                <h1>FinCalc Home</h1>
                <p>Welcome to FinCalc: your all-in-one solution to financial planning.</p>
            </div>
        </div>
    )
}

export default Home;