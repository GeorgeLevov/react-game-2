import { useEffect } from "react";
import useGameLogic from "./useGameLogic";
import "./App.css";

function App() {
    const gameLogic = useGameLogic();
    const {
        inputRef,
        gameStarted,
        textInput,
        handleInputChange,
        timeRemaining,
        startNewGame,
        points,
    } = gameLogic;

    return (
        <div className="App">
            <h1>Speed Typer</h1>
            <textarea
                ref={inputRef}
                className="typer-input"
                disabled={!gameStarted}
                value={textInput}
                onChange={(event) => handleInputChange(event)}
                name="textInput"
            />

            {gameStarted ? (
                <h4>
                    Time Remaining: <b>{timeRemaining}</b>
                </h4>
            ) : (
                <h4>&nbsp;</h4>
            )}
            <button disabled={gameStarted} onClick={() => startNewGame()}>
                Start Game
            </button>

            <h1>Word Count: {points}</h1>
        </div>
    );
}

export default App;
