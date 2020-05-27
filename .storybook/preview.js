import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addons } from '@storybook/addons';
import { addReadme } from 'storybook-readme';
import { setConfig } from 'react-hot-loader';

const reqDesign = require.context('../src/design', true, /\.stories\.(tsx|ts|mdx)$/);
const reqComponents = require.context('../src/components', true, /\.stories\.(tsx|ts|mdx)$/);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
      },
    options: {
      storySort: true,
      showRoots: true,
    },
  });

  setConfig({ pureSFC: true});

function loadStories() {
  reqDesign.keys().forEach(reqDesign);
  reqComponents.keys().forEach(reqComponents);
}
configure(loadStories, module);
