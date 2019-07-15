import React from 'react';

import Avatar from '../../atoms/Avatar';

import styles from './index.module.scss';

const Hero = ({ node, title }) => (
  <div className={styles.root}>
    <h1 className={styles.title}>
      <Avatar />
      <span>suzukalight.com</span>
    </h1>
    <small className={styles.caption}>まずは技術中心に</small>
  </div>
);

export default Hero;
