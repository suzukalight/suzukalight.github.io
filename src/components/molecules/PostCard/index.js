import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../../atoms/Card';
import DateAndTags from '../../molecules/DateAndTags';

import { getFixedImage } from '../../../utils/dom';

import styles from './index.module.scss';

const PostCard = ({ className, post }) => (
  <Card className={cn(styles.root, className)}>
    <CardImage>
      <Link className={styles.image} to={post.head.slug}>
        {getFixedImage(post.head.hero)}
      </Link>
      <Link className={styles.category} to={`/categories/${kebabCase(post.head.category)}`}>
        <span>{post.head.category}</span>
      </Link>
    </CardImage>

    <CardBody>
      <div className={styles.texts}>
        <Link className={styles.link} to={post.head.slug}>
          <CardTitle>{post.head.title}</CardTitle>
          <CardDescription>
            <p
              className={styles.excerpt}
              dangerouslySetInnerHTML={{
                __html: post.head.description || post.head.excerpt,
              }}
            />
          </CardDescription>
        </Link>
      </div>

      <CardFooter>
        <DateAndTags className={styles.tags} date={post.head.date} tags={post.head.tags} />
      </CardFooter>
    </CardBody>
  </Card>
);

export default PostCard;
