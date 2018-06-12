import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import styled from 'styled-components';

function LinearGradient({ className, id, stops }) {
  const linearStops = stops.map((eachStop) => (
    <stop
      key={shortId.generate()}
      offset={eachStop.offset}
      stopColor={eachStop.stopColor}
      stopOpacity={eachStop.stopOpacity}
    />
  ));

  return (
    <svg className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          {linearStops}
        </linearGradient>
      </defs>
    </svg>
  );
}

LinearGradient.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      offset: PropTypes.string.isRequired,
      stopColor: PropTypes.string.isRequired,
      stopOpacity: PropTypes.number.isRequired,
    }),
  ),
};

export default styled(LinearGradient)`
  display: block;
  height: 0;
  width: 0;
`;
