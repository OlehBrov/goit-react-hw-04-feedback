import styled from "styled-components";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrap>
      <FeedbackButton type="button" name="good" label="good" onClick={onLeaveFeedback}>
        Good
      </FeedbackButton>
      <FeedbackButton
        type="submit"
        name="neutral"
        label="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </FeedbackButton>
      <FeedbackButton type="submit" name="bad" label="bad" onClick={onLeaveFeedback}>
        Bad
      </FeedbackButton>
    </ButtonsWrap>
  );
};

const ButtonsWrap = styled.div`
  width: 100%;
`
const FeedbackButton = styled.button`
  width: calc((90%)/3);
  margin-left: 5px;
  margin-right: 5px;
  font-size: 24px;
`