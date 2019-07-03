import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/atoms/Seo';
import Layout from '../components/templates/Layout';

const NotFoundPage = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.titleteTitle}>
    <Seo title="404: Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
