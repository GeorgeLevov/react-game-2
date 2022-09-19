import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [textareaInput, setTextAreaInput] = useState("");
    const [timeRemaining, settimeRemaining] = useState(10);
    const [gameStarted, setGameStarted] = useState(false);
    const [points, setPoints] = useState(0);

    const handleInputChange = (e) => {
        setTextAreaInput(e.target.value);
    };

    const countWords = (wordsString) => {
        const unfilteredInput = wordsString.trim().split(" ");
        const filteredInput = unfilteredInput.filter((word) => word !== "");
        return filteredInput.length;
    };

    const startNewGame = () => {
        setGameStarted(true);
        settimeRemaining(10);
        setTextAreaInput("");
        setPoints(0);
    };

    const endGame = () => {
        setPoints(countWords(textareaInput));
        setGameStarted(false);
    };

    useEffect(() => {
        if (timeRemaining === 0) {
            endGame();
        } else if (gameStarted && timeRemaining > 0) {
            setTimeout(
                () =>
                    settimeRemaining(
                        (prevTimeRemaining) => prevTimeRemaining - 1
                    ),
                1000
            );
        }
    }, [timeRemaining, gameStarted]);

    return (
        <div className="App">
            <h1>Speed Typer</h1>
            <textarea
                className="typer-input"
                disabled={!gameStarted}
                value={textareaInput}
                placeholder="Start Typing..."
                onChange={(event) => handleInputChange(event)}
                // name="textInput"
            />

            <h4>Time Remaining: {timeRemaining}</h4>
            <button disabled={gameStarted} onClick={() => startNewGame()}>
                Start Game
            </button>

            <h1>Word Count: {points}</h1>
        </div>
    );
}

export default App;
