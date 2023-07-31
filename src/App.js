import React, { useState } from 'react';

const Statistics = (props) => {
    return (
        <div>
            {props.rating} {props.count}
        </div>
    );
};

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

            <Statistics rating="good" count={good} />
            <Statistics rating="neutral" count={neutral} />
            <Statistics rating="bad" count={bad} />
            <Statistics rating="all" count={all} />
            <Statistics
                rating="average"
                count={good * 1 + neutral * 0 + (bad * -1) / 3}
            />
            <Statistics
                rating="positive"
                count={`${(good * 100) / all}` + ' %'}
            />
        </div>
    );
};

export default App;
