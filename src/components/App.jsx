import { Container } from './container/container.styled';
import { Component, useEffect, useState } from 'react';
import { Statistics } from './feedbackControls/Statistics';
import { FeedbackOptions } from './feedbackControls/FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPrecentage] = useState(0);

  const onFeedbackClick = ({ target: { name } }) => {
    console.log({ name }, name);
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }

    console.log(good, bad, neutral);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
     good > 0 ? setPrecentage(Math.round((good / (good + neutral + bad)) * 100) + '%') : setPrecentage(0)
  }, [good, neutral, bad]);

  return (
    <Container>
      <div title="Please, leave a feedback">
        <h1>Please, leave a feedback</h1>
        <FeedbackOptions onLeaveFeedback={onFeedbackClick}></FeedbackOptions>
      </div>
      <div title="Statistics">
        <h2>Statistisc</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        ></Statistics>
      </div>
    </Container>
  );
};
