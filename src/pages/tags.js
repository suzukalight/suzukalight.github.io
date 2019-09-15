import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import Seo from '../components/atoms/Seo';
import { Layout, Centered } from '../components/templates/Layout';

const TagsPage = ({ location, siteMetadata: { title }, tags }) => (
  <Layout location={location} title={title}>
    <Seo title="すべてのタグ" />
    <Centered>
      <h1>すべてのタグ</h1>
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Centered>
  </Layout>
);

TagsPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

const Tags = ({ location, data, pageContext }) => {
  const { site, allMarkdownRemark, allContentfulArticle } = data || {};
  const groups = [...allMarkdownRemark.group, ...allContentfulArticle.group];
  const tagsMap = groups.reduce((cat, group) => {
    if (!cat[group.fieldValue]) cat[group.fieldValue] = 0;
    cat[group.fieldValue] += group.totalCount;
    return cat;
  }, {});
  const tags = Object.keys(tagsMap)
    .sort((a, b) => a.localeCompare(b))
    .map(key => ({
      fieldValue: key,
      totalCount: tagsMap[key],
    }));

  return <TagsPage location={location} siteMetadata={site.siteMetadata} tags={tags} />;
};

export default Tags;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { status: { eq: "published" } } }, limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    allContentfulArticle(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
