import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../../utils/typography';

import styles from './index.module.scss';

const query = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/tarako.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

const Bio = () => {
  const data = useStaticQuery(query);
  const { author, social } = data.site.siteMetadata;

  return (
    <div className={styles.root}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />

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
