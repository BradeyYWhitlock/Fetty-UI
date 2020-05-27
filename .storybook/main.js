module.exports = {
    stories: ['../src/**/*.stories.(ts|tsx|mdx)'],
    addons: [{
        name: "@storybook/addon-docs/react/preset",
        options: {
          configureJSX: true,
          babelOptions: {},
          sourceLoaderOptions: null,
        },
      },
      '@storybook/preset-typescript'],
  };