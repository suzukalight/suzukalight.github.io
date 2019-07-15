import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../../atoms/Avatar';

import styles from './index.module.scss';

const query = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`;

const Bio = ({ className }) => {
  const data = useStaticQuery(query);
  const { author, social } = data.site.siteMetadata;

  return (
    <div className={`${styles.root} ${className}`}>
      <Avatar />

      <div className={styles.description}>
        <p className={styles.username}>
          Written by <strong>{author}</strong>.
        </p>

        <ul className={styles.social}>
          <li className={styles.socialItem}>
            <a href={`https://github.com/${social.twitter}`}>GitHub</a>
          </li>
          <li className={styles.socialItem}>
            <a href={`https://twitter.com/${social.github}`}>Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
