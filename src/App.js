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

    const all = good + bad + neutral;

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
            <div>all {all}</div>
            <div>average {good * 1 + neutral * 0 + (bad * -1) / 3}</div>
            <div>positive {(good * 100) / all} %</div>
        </div>
    );
};

export default App;
