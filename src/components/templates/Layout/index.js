import React from 'react';
import { Link } from 'gatsby';

import styles from './index.module.scss';

const HeaderLink = ({ title }) => (
  <Link className={styles.siteName} to={`/`}>
    {title}
  </Link>
);

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return location.pathname === rootPath ? (
    <header>
      <h1 className={styles.headerBig}>
        <HeaderLink title={title} />
      </h1>
    </header>
  ) : (
    <header>
      <h3 className={styles.headerSmall}>
        <HeaderLink title={title} />
      </h3>
    </header>
  );
};

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.footerCopyright}>© 2019 by suzukalight</p>
    <p className={styles.footerToHome}>
      <Link to="/">suzukalight.com</Link>
    </p>
  </footer>
);

const Layout = ({ location, title, children }) => (
  <div className={styles.root}>
    <Header location={location} title={title} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
