import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import Seo from '../components/atoms/Seo';
import { Layout, Centered } from '../components/templates/Layout';

const CategoriesPage = ({ location, siteMetadata: { title }, categories }) => (
  <Layout location={location} title={title}>
    <Seo title="すべてのカテゴリ" />
    <Centered>
      <h1>すべてのカテゴリ</h1>
      <ul>
        {categories.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Centered>
  </Layout>
);

CategoriesPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

const Categories = ({ location, data, pageContext }) => {
  const { site, allMarkdownRemark, allContentfulArticle } = data || {};
  const groups = [...allMarkdownRemark.group, ...allContentfulArticle.group];
  const categoriesMap = groups.reduce((cat, group) => {
    if (!cat[group.fieldValue]) cat[group.fieldValue] = 0;
    cat[group.fieldValue] += group.totalCount;
    return cat;
  }, {});
  const categories = Object.keys(categoriesMap)
    .sort((a, b) => a.localeCompare(b))
    .map(key => ({
      fieldValue: key,
      totalCount: categoriesMap[key],
    }));

  return (
    <CategoriesPage location={location} siteMetadata={site.siteMetadata} categories={categories} />
  );
};

export default Categories;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { status: { eq: "published" } } }, limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
    allContentfulArticle(limit: 2000) {
      group(field: category) {
        fieldValue
        totalCount
      }
    }
  }
`;
