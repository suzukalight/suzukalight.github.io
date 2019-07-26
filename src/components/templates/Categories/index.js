import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../Layout';
import Seo from '../../atoms/Seo';
import Posts from '../../molecules/Posts';
import Hero from '../../molecules/Hero';

import styles from './index.module.scss';

const Categories = ({ location, pageContext, data }) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const categoryHeader = `"${category}" に関する記事 (${totalCount}件)`;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={categoryHeader} />

      <div className={styles.root}>
        <Hero />

        <h1 className={styles.header}>
          <span className={styles.heading}>{categoryHeader}</span>
          <span className={styles.allCategories}>
            <Link to="/categories">すべてのカテゴリを表示</Link>
          </span>
        </h1>

        <Posts className={styles.posts} posts={edges} />
      </div>
    </Layout>
  );
};

Categories.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
};

export default Categories;

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/M/D")
            title
            description
            category
            tags
            hero {
              childImageSharp {
                fixed(width: 280, height: 140) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
