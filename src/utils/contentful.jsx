import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, description, file } = node.data.target.fields;
      const key1 = Object.keys(file)[0];
      const { contentType, url } = file[key1];
      const mimeGroup = contentType.split('/')[0];

      switch (mimeGroup) {
        case 'image': {
          return (
            <img
              title={title ? title[key1] : null}
              alt={description ? description[key1] : null}
              src={url}
            />
          );
        }
        default: {
          return null;
        }
      }
    },
  },
};

export const contentfulArticleToReactComponents = json => {
  return documentToReactComponents(json, renderOptions);
};
