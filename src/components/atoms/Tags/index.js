import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import styles from './index.module.scss';

const Tag = ({ tag }) => (
  <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
    <li className={styles.tag}>{tag}</li>
  </Link>
);

const Tags = ({ className, tags }) => (
  <ul className={cx(styles.tags, className)}>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default Tags;
