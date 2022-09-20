import { useState, useEffect, useRef } from "react";

function useGameLogic() {
    // We're setting a default 10 seconds of Game time
    const gameTime = 10;

    const [textInput, setTextInput] = useState("");
    const [timeRemaining, settimeRemaining] = useState(gameTime);
    const [gameStarted, setGameStarted] = useState(false);
    const [points, setPoints] = useState(0);
    const inputRef = useRef("");

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const countWords = (wordsString) => {
        const unfilteredInput = wordsString.trim().split(" ");
        const filteredInput = unfilteredInput.filter((word) => word !== "");
        return filteredInput.length;
    };

    const startNewGame = () => {
        setGameStarted(true);
        settimeRemaining(gameTime);
        setTextInput("");
        setPoints(0);
        // using setTimeout otherwise we're trying to focus on a disabled textarea element,
        // so setTimeout will put the ref a bit further back in the eventLoop
        setTimeout(() => inputRef.current.focus(), 1);
    };

    const endGame = () => {
        setPoints(countWords(textInput));
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

    return {
        textInput,
        handleInputChange,
        timeRemaining,
        settimeRemaining,
        gameStarted,
        points,
        inputRef,
        startNewGame,
        endGame,
    };
}

export default useGameLogic;
