// import { FeedbackButtons } from './FeedbackOptions/FeedbackOptions';
import { Stats } from './stats/stats';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = props => {

  return (
    <>
      <StatList>
        <StatItem>Good: {props.good}</StatItem>
        <StatItem>Neutral: {props.neutral}</StatItem>
        <StatItem>Bad: {props.bad}</StatItem>
        <StatItem>Total feedbacks {props.total}</StatItem>
         <StatItem>Positive feedbacks {props.positivePercentage}</StatItem>
      </StatList>
      <Stats state={props} />
    </>
  );
};
