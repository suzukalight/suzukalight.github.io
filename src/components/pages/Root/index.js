import React from 'react';

import Seo from '../../atoms/Seo';
import Hero from '../../molecules/Hero';
import Posts from '../../molecules/Posts';
import Layout from '../../templates/Layout';

import styles from './index.module.scss';

const IndexPage = ({ location, siteMetadata, posts }) => (
  <Layout location={location} title={siteMetadata.title}>
    <Seo title="Index" description="なければ作ればいいじゃない" />

    <div className={styles.root}>
      <Hero />
      <Posts posts={posts} />
    </div>
  </Layout>
);

export default IndexPage;
