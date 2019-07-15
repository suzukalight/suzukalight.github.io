import React from 'react';

import styles from './index.module.scss';

export const Card = ({ children, className }) => (
  <div className={`${styles.root} ${className}`}>{children}</div>
);

export const CardImage = ({ children, className }) => (
  <div className={`${styles.image} ${className}`}>{children}</div>
);

export const CardBody = ({ children, className }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h1 className={`${styles.title} ${className}`}>
    <span className={styles.titleInner}>{children}</span>
  </h1>
);

export const CardDescription = ({ children, className }) => (
  <div className={`${styles.description} ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={`${styles.footer} ${className}`}>{children}</div>
);
