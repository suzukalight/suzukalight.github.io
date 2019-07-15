import React from 'react';

import Seo from '../../atoms/Seo';
import PostCard from '../../molecules/PostCard';
import Hero from '../../molecules/Hero';
import Layout from '../../templates/Layout';

import styles from './index.module.scss';

const Posts = ({ posts }) =>
  posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return <PostCard key={node.fields.slug} node={node} title={title} />;
  });

const IndexPage = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <Seo title="Index" description="なければ作ればいいじゃない" />

    <div className={styles.root}>
      <Hero />
      <section className={styles.posts}>
        <Posts posts={data.allMarkdownRemark.edges} />
      </section>
    </div>
  </Layout>
);

export default IndexPage;
