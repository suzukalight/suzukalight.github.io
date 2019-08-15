import React from 'react';
import Image from 'gatsby-image';

export const getFluidImage = image => {
  if (!image) return null;
  if (image && image.childImageSharp) return <Image fluid={image.childImageSharp.fluid} />;
  if (image && image.sizes) return <Image fluid={image.sizes} />;
  return null;
};

export const getFixedImage = image => {
  if (!image) return null;
  if (image && image.childImageSharp) return <Image fixed={image.childImageSharp.fixed} />;
  if (image && image.sizes) return <Image fluid={image.sizes} />;
  return null;
};
