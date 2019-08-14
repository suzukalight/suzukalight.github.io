import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';

import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../../atoms/Card';
import DateAndTags from '../../molecules/DateAndTags';

import styles from './index.module.scss';

const PostCard = ({ className, node, title }) => (
  <Card className={cn(styles.root, className)}>
    <CardImage>
      <Link className={styles.image} to={node.fields.slug}>
        {node.frontmatter.hero && <Image fixed={node.frontmatter.hero.childImageSharp.fixed} />}
      </Link>
      <Link className={styles.category} to={`/categories/${kebabCase(node.frontmatter.category)}`}>
        <span>{node.frontmatter.category}</span>
      </Link>
    </CardImage>

    <CardBody>
      <div className={styles.texts}>
        <Link className={styles.link} to={node.fields.slug}>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <p
              className={styles.excerpt}
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </CardDescription>
        </Link>
      </div>

      <CardFooter>
        <DateAndTags
          className={styles.tags}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
        />
      </CardFooter>
    </CardBody>
  </Card>
);

export default PostCard;