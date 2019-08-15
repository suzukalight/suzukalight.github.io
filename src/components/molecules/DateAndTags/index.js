import React from 'react';
import cn from 'classnames';
import format from 'date-fns/format';

import Tags from '../../atoms/Tags';

import styles from './index.module.scss';

const DateAndTags = ({ className, date, tags }) => (
  <div className={cn(styles.root, className)}>
    <small className={styles.date}>{format(date, 'YYYY/M/D')}</small>
    <Tags className={styles.tags} tags={tags} />
  </div>
);

export default DateAndTags;
