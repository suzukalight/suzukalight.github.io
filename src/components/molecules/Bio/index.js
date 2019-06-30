import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './index.module.scss';

const Bio = () => {
  const data = useStaticQuery(graphql`
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
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  return (
    <div className={styles.root}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{}}
        imgStyle={{}}
        // style={styles.heroImageWrap}
        // imgStyle={styles.heroImage}
      />
      <p>
        Written by <strong>{author}</strong>.<br />
        <a href={`https://github.com/${social.twitter}`}>GitHub</a>{' '}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
      </p>
    </div>
  );
};

export default Bio;
