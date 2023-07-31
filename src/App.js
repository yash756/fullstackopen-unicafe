import React, { useState } from 'react';

const Statistics = (props) => {
    console.log(props);
    if (props.count[3] === 0) {
        return <div>no feedback given</div>;
    }
    return (
        <div>
            <div>
                {props.rating[0]} {props.count[0]}
            </div>
            <div>
                {props.rating[1]} {props.count[1]}
            </div>
            <div>
                {props.rating[2]} {props.count[2]}
            </div>
            <div>
                {props.rating[3]} {props.count[3]}
            </div>
            <div>
                {props.rating[4]} {props.count[4]}
            </div>
            <div>
                {props.rating[5]} {props.count[5]}
            </div>
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
    const average = good * 1 + neutral * 0 + (bad * -1) / 3;

    return (
        <div>
            <h2>give feedback</h2>

            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>

            <h2>statistics</h2>
            <Statistics
                rating={[
                    'good',
                    'neutral',
                    'bad',
                    'all',
                    'average',
                    'positive',
                ]}
                count={[
                    good,
                    neutral,
                    bad,
                    all,
                    average,
                    `${(good * 100) / all}` + ' %',
                ]}
            />
        </div>
    );
};

export default App;
