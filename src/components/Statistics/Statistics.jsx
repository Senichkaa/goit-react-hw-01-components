import { StatSection, StatList, Item, SpanTexts } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <h2 className="task-title">Upload stats</h2>}

      <StatList>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <SpanTexts>{stat.label}</SpanTexts>
              <SpanTexts>{stat.percentage}%</SpanTexts>
            </Item>
          );
        })}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
