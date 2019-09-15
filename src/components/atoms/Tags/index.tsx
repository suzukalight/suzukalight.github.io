import * as React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import * as styles from './index.module.scss';

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => (
  <Link className={styles.link} to={`/tags/${kebabCase(tag)}/`}>
    <li className={styles.tag}>{tag}</li>
  </Link>
);

interface TagsProps {
  className: string;
  tags: string[];
}

const Tags = ({ className, tags }: TagsProps) => (
  <ul className={cn(styles.tags, className)}>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default Tags;
