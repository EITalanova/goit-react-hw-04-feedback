import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const arr = ['good', 'bad', 'neutral'];

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
        {el === 'good' ? '😊' : el === 'bad' ? '☹️' : '😐'}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
