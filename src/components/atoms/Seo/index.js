import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
        defaultImage
        social {
          twitter
        }
      }
    }
  }
`;

function Seo({ description, lang, meta, title, image }) {
  const data = useStaticQuery(query);
  const { siteMetadata } = data.site || {};
  const {
    siteUrl,
    title: siteTitle,
    defaultImage,
    social: { twitter },
  } = siteMetadata;
  const metaTitle = `${title}${title && ' | '}${siteTitle}`;
  const metaDescription = description || siteMetadata.description;
  const siteImage = `${siteUrl}${image || defaultImage}`;
  const metaData = [
    { name: `image`, content: siteImage },
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: metaTitle },
    { property: `og:type`, content: `website` },
    { property: `og:image`, content: siteImage },
    // { property: `og:url`, content: siteImage },
    { property: `og:description`, content: metaDescription },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: twitter },
    { name: `twitter:title`, content: metaTitle },
    { name: `twitter:description`, content: metaDescription },
    { name: `twitter:image`, content: siteImage },
  ].concat(meta);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={metaData}
    />
  );
}

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Seo;
