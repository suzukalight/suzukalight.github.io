import Typography from 'typography';
import GitHub from 'typography-theme-github';

GitHub.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

GitHub.baseFontSize = '18px';
GitHub.baseLineHeight = 1.66;
GitHub.blockMarginBottom = 1;

const typography = new Typography(GitHub);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
