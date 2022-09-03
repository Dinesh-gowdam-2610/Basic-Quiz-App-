import React, { useContext } from 'react'
import { Questions } from "../Quiz/Helpers/QuestionBank"
import { QuizContext } from "../Quiz/Helpers/Helpers"
import "../css/app.css"
function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext)
    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }
    return (
        <div className="endScreen">
            <h1>👉 Quiz Finished 👈</h1>
            <h3> 🥳 {score} / {Questions.length}🥳</h3>
            <div>
                <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
        </div>
    )
}

export default EndScreen