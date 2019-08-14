import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';

export const convertFromMarkdownToArticle = data => {
  const { site, markdownRemark } = data || {};
  const { html, frontmatter, fields, tableOfContents, excerpt } = markdownRemark;
  const description = frontmatter.description || frontmatter.excerpt;

  return {
    head: {
      ...frontmatter,
      ...fields,
      tableOfContents,
      excerpt,
      description,
      source: 'github',
    },
    body: html,
    siteMetadata: site.siteMetadata,
  };
};

export const convertFromContentfulToArticle = data => {
  const { site, contentfulArticle } = data || {};
  const { body, ...head } = contentfulArticle;
  const description = head.description || head.excerpt;

  return {
    head: {
      ...head,
      description,
      source: 'contentful',
      slug: `/${head.slug}/`,
    },
    // body: documentToReactComponents((body || {}).json),
    node: documentToReactComponents((body || {}).json),
    siteMetadata: site.siteMetadata,
  };
};

export const convertToArticle = data => {
  if (!data) return null;
  if (data.markdownRemark) return convertFromMarkdownToArticle(data);
  if (data.contentfulArticle) return convertFromContentfulToArticle(data);
  return null;
};

export const convertToArticles = data => {
  if (!data) return null;
  const { site, allMarkdownRemark, allContentfulArticle } = data || {};

  const articlesGitHub = ((allMarkdownRemark || {}).edges || []).map(e =>
    convertFromMarkdownToArticle({ site, markdownRemark: e.node }),
  );
  const articlesContentful = ((allContentfulArticle || {}).edges || []).map(e =>
    convertFromContentfulToArticle({ site, contentfulArticle: e.node }),
  );

  return [...articlesGitHub, ...articlesContentful];
};

export const sortByDate = data =>
  data.sort((a, b) =>
    differenceInMilliseconds(((b || {}).head || {}).date, ((a || {}).head || {}).date),
  );
