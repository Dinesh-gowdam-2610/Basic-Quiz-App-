import React from 'react'
import { useState, useContext } from 'react'
import MainMenu from '../Quiz/MainMenu';
import Quiz from '../Quiz/Quiz';
import EndScreen from '../Quiz/EndScreen';
import { QuizContext } from '../Quiz/Helpers/Helpers'
import "../css/app.css";

function MainApp() {
    const [gameState, setGameState] = useState("menu")
    const [score, setScore] = useState(0)
    return (
        <div className="App">
            {" "}
            <h1> Quiz App </h1>
            <QuizContext.Provider value={{ gameState, setGameState, score, setScore }} >
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <Quiz />}
                {gameState === "endScreen" && <EndScreen />}
            </QuizContext.Provider>
        </div >

    )
}

export default MainApp