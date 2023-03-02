import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);

  return arr.map(el => {
    return (
      <button
        className={css.btn}
        onClick={onLeaveFeedback}
        key={el}
        name={el}
        type="button"
      >
        {el} 
        {el === 'good' ? (" ; )") : el === 'bad' ? (" : (") : (" : |")}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
