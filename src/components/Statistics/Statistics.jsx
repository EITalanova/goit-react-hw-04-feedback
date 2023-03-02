import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <span>Good: </span>
        <span className={css.numb}>{good}</span>
      </li>
      <li className={css.item}>
        <span>Neutral: </span>
        <span className={css.numb}>{neutral}</span>
      </li>
      <li className={css.item}>
        <span>Bad: </span>
        <span className={css.numb}>{bad}</span>
      </li>
      <li className={css.item}>
        <span>Total: </span>
        <span className={css.numb}>{total}</span>
      </li>
      <li className={css.item}>
        <span>Positive feedbak: </span>
        <span className={css.numb}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
