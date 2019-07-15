import React from 'react';

import Tags from '../../atoms/Tags';

import styles from './index.module.scss';

const DateAndTags = ({ className = '', date, tags }) => (
  <div className={`${styles.root} ${className}`}>
    <small className={styles.date}>{date}</small>
    <Tags className={styles.tags} tags={tags} />
  </div>
);

export default DateAndTags;
