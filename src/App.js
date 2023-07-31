import React, { useState } from 'react';

const Statistics = (props) => {
    console.log(props);
    if (props.count[3] === 0) {
        return <div>no feedback given</div>;
    }
    return (
        <div>
            <StatisticLine text={props.rating[0]} value={props.count[0]} />
            <StatisticLine text={props.rating[1]} value={props.count[1]} />
            <StatisticLine text={props.rating[2]} value={props.count[2]} />
            <StatisticLine text={props.rating[3]} value={props.count[3]} />
            <StatisticLine text={props.rating[4]} value={props.count[4]} />
            <StatisticLine text={props.rating[5]} value={props.count[5]} />
        </div>
    );
};

const StatisticLine = (props) => {
    return (
        <div>
            {props.text} {props.value}
        </div>
    );
};

const Button = (props) => {
    return <button onClick={props.handle}>{props.text}</button>;
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

            <Button handle={handleGood} text="good" />
            <Button handle={handleNeutral} text="neutral" />
            <Button handle={handleBad} text="bad" />

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
