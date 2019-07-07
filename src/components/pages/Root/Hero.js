import React from 'react';

import Bio from '../../molecules/Bio';

import styles from './Hero.module.scss';

const Hero = ({ node, title }) => (
  <div className={styles.bio}>
    <Bio />
  </div>
);

export default Hero;
