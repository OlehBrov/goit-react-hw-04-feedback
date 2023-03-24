import { Container } from './container/container.styled';
import { Component } from 'react';
import { Statistics } from './feedbackControls/Statistics';
import { FeedbackOptions } from './feedbackControls/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = ({ target }) => {
    this.setState(prevState => {
      return { [target.name]: prevState[target.name] + 1 };
    });
  };

  totalFeedbacks = state => {
    return Object.values(state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };
  positivePercentage = state => {
    if (this.totalFeedbacks(this.state) !== 0) {
      return (
        Math.round((state.good / this.totalFeedbacks(this.state)) * 100) + '%'
      );
    }
    return 0;
  };

  render() {
    return (
      <Container>
        <div title="Please, leave a feedback">
          <h1>Please, leave a feedback</h1>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onFeedbackClick}
          ></FeedbackOptions>
        </div>
        <div title="Statistics">  
          <h2>Statistisc</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedbacks(this.state)}
            positivePercentage={this.positivePercentage(this.state)}
          ></Statistics>
        </div>
      </Container>
    );
  }
}
