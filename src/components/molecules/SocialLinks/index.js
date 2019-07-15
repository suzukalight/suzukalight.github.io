import React from 'react';
import cn from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  PocketShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  PocketIcon,
} from 'react-share';

import styles from './index.module.scss';

const query = graphql`
  query SocialLinksQuery {
    site {
      siteMetadata {
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;

const SocialLinks = ({ className, url, title, via }) => {
  const data = useStaticQuery(query);
  const { siteUrl, social } = data.site.siteMetadata;
  const twitterAccount = via || social.twitter;
  const fullUrl = `${siteUrl}${url}`;

  return (
    <ul className={cn(styles.root, className)}>
      <li className={styles.item}>
        <FacebookShareButton url={fullUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>
      <li className={styles.item}>
        <TwitterShareButton title={title} via={twitterAccount} url={fullUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </li>
      <li className={styles.item}>
        <LineShareButton title={title} url={fullUrl}>
          <LineIcon size={32} round />
        </LineShareButton>
      </li>
      <li className={styles.item}>
        <PocketShareButton title={title} url={fullUrl}>
          <PocketIcon size={32} round />
        </PocketShareButton>
      </li>
      <li className={styles.item}>
        <div className={styles.hatebu}>
          <a
            href="https://b.hatena.ne.jp/entry/"
            className="hatena-bookmark-button"
            data-hatena-bookmark-layout="basic"
            data-hatena-bookmark-width="32"
            data-hatena-bookmark-height="32"
            title="このエントリーをはてなブックマークに追加"
          >
            <img
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
              className={styles.hatebuImage}
              alt="このエントリーをはてなブックマークに追加"
              width="32"
              height="32"
            />
          </a>
          <script
            type="text/javascript"
            src="https://b.st-hatena.com/js/bookmark_button.js"
            charSet="utf-8"
            async="async"
          ></script>
        </div>
      </li>
    </ul>
  );
};

export default SocialLinks;
