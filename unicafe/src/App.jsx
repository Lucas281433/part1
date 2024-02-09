import { useState } from "react";

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='Good' /></td>
            <td><StatisticLine value={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Neutral' /></td>
            <td><StatisticLine value={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Bad' /></td>
            <td><StatisticLine value={props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='All' /></td>
            <td><StatisticLine value={props.all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Average' /></td>
            <td><StatisticLine value={props.average.toFixed(1)} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='Positive' /></td>
            <td><StatisticLine value={`${props.positive.toFixed(1)} % `}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => {
  
  return (
    <div>
      {props.text} {props.value} 
    </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const feedbackGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(((good + 1) - bad) / (all + 1));
    setPositive(((good + 1) / (all + 1)) * 100);
  };

  const feedbackNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAverage((good - bad) / (all + 1));
    setPositive((good / (all + 1)) * 100);
  };

  const feedbackBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage((good - (bad + 1)) / (all + 1));
    setPositive((good / (all + 1)) * 100);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' handleClick={feedbackGood} />
      <Button text='Neutral' handleClick={feedbackNeutral} />
      <Button text='Bad' handleClick={feedbackBad} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
