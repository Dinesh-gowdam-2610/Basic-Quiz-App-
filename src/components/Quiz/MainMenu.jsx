import React, { useContext } from 'react'
import { QuizContext } from '../Quiz/Helpers/Helpers'
import "../css/app.css"
function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContext)
    return (
        <div className="Menu">
            {/* <h1>Start Game</h1> */}
            <button onClick={() => { setGameState("quiz") }}>
                Start Quiz
            </button>
        </div>
    )
}

export default MainMenu