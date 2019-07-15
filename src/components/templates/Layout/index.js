import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

import Avatar from '../../atoms/Avatar';

import styles from './index.module.scss';

const query = graphql`
  query LayoutQuery {
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

export const Header = ({ title, social }) => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <h3 className={styles.headerSiteTitle}>
        <Link className={styles.siteName} to={`/`}>
          {title}
        </Link>
      </h3>
      <ul className={styles.headerSocials}>
        <li className={styles.socialItem}>
          <a href={`https://github.com/${social.twitter}`}>GitHub</a>
        </li>
        <li className={styles.socialItem}>
          <a href={`https://twitter.com/${social.github}`}>Twitter</a>
        </li>
      </ul>
    </div>
  </header>
);

export const Footer = ({ author }) => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerAvatar}>
        <Avatar />
        <Link to="/" className={styles.footerLink}>
          suzukalight.com
        </Link>
      </div>
      <p className={styles.footerCopyright}>{`© 2019 by ${author}`}</p>
    </div>
  </footer>
);

export const Centered = ({ children }) => <div className={styles.centered}>{children}</div>;

export const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(query);
  const { author, social } = data.site.siteMetadata;

  return (
    <div className={styles.root}>
      <Header location={location} title={title} social={social} />
      <main className={styles.main}>{children}</main>
      <Footer author={author} />
    </div>
  );
};

export default Layout;
