import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../../utils/typography';

const query = graphql`
  query AvatarQuery {
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

const Avatar = () => {
  const data = useStaticQuery(query);
  const { author } = data.site.siteMetadata;

  return (
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
  );
};

export default Avatar;
