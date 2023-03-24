import { PieChart } from 'react-minimal-pie-chart';
import { StatsStyled } from './stats.styled';


export const Stats = ({ state }) => {

  return ( 
    
    
    <StatsStyled>
      <PieChart
        data={makeData(state)}
        label={(labelRenderProps) => {

          if (labelRenderProps.dataEntry.percentage !== 0)
            return (
              labelRenderProps.dataEntry.title +
              ' ' +
              (Math.round(labelRenderProps.dataEntry.percentage) > 0
                ? Math.round(labelRenderProps.dataEntry.percentage) + '%'
                : '')
            );
        }}
        labelStyle={index => ({
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
      />
    </StatsStyled>
  );
};

function makeData(state) {

  let newState = {
    good: state.good,
    neutral: state.neutral,
    bad: state.bad,
  }
  return Object.entries(newState).map(([title, value]) => ({
    title,
    value,
    color: addColor(title),
  }));
}
function addColor(title) {
  if (title === 'good') {
    return '#03fc0b';
  }
  if (title === 'neutral') {
    return '#fcca03';
  }
  return '#fc0303';
}

