import React from "react";
import NavBar from "../components/NavBar";
// import { Link } from 'react-router-dom';

const Home = () => {
    

    return (
        <div>
            <NavBar />
            <div class = "home-hero">
                <h1>FinCalc Home</h1>
                <p>Welcome to FinCalc: your all-in-one solution to financial planning.</p>
            </div>
            <section class = "calc-card">
                <img src="https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                alt = "calculator"/>
                <div class = "card-text">
                    <h2>Budget Planner!</h2>
                    <p>Click here to plan your budget!</p>
                        <a href="/budgetplanner">Budget Planner</a>
                </div>
            </section>
        </div>
    )
}

export default Home;