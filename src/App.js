import React, { useState } from 'react';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
    };

    const handleNeutral = () => {
        setNeutral(neutral + 1);
    };

    const handleBad = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h2>give feedback</h2>

            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>

            <h2>statistics</h2>

            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
        </div>
    );
};

export default App;