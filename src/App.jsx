import { useState } from "react";
import "./App.css";

/**
 * Challenge: build the basic structure of our game
 *
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in
 *      (tip: React normalizes <textarea /> to be more like <input />,
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Speed Typer</h1>
            <textarea
                className="typer-input"
                // value=""
                // placeholder=""
                // onChange={}
                // name=""
            />

            <h4>Time Remaining: </h4>
            <button>Start Game</button>

            <h1>Word Count: </h1>
        </div>
    );
}

export default App;
