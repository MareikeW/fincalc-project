import React from "react";
import NavBar from "../components/NavBar";
// import { Link } from 'react-router-dom';

const Home = () => {
    

    return (
        <div>
            <NavBar />
            <div class = "container">
            <div class = "home-hero">
                <h1>FinCalc Home</h1>
                <p>Welcome to FinCalc: your all-in-one solution to financial planning.</p>
            </div>
            <div class = "card-container">
                <div class = "card">
                        <img src="https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt = "calculator"/>  
                    <div class = "card-text">
                        <h2>Budget Planner!</h2>
                        <p>Click here to plan your budget!</p>
                            <a href="/budgetplanner">Budget Planner</a>
                    </div>
                </div>
                <div class = "card">
                    <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" 
                    alt = "loose change in a clear vase with plant"/>
                    <div class = "card-text">
                        <h2>Savings Calculator!</h2>
                        <p>Click here to calculate savings over time!</p>
                            <a href="/savings-calculator">Savings Calculator</a>
                    </div>
                </div>
                <div class = "card">
                    <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" 
                    alt = "Daily newspaper economy stock market chart"/>
                    <div class = "card-text">
                        <h2>Compound Interest!</h2>
                        <p>Click here to calculate compound interest!</p>
                            <a href="/compoundinterest-calculator">Compound Interest</a>
                    </div>
                </div>
                <div class = "card">
                    <img src="https://images.unsplash.com/photo-1608111283577-43d930222227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                    alt = "money in an envelope"/>
                    <div class = "card-text">
                        <h2>Retirement Savings!</h2>
                        <p>Click here to calculate retirement savings!</p>
                            <a href="/retirement-calculators">Retirement Savings</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;