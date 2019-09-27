import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`;

function Seo({ description, lang, meta, title }) {
  const data = useStaticQuery(query);
  const { siteMetadata } = data.site;
  const metaDescription = description || siteMetadata.description;
  const metaData = [
    { name: `image`, content: siteMetadata.image },
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { property: `og:image`, content: siteMetadata.image },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: siteMetadata.author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
    { name: `twitter:image`, content: siteMetadata.image },
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
};

export default Seo;
