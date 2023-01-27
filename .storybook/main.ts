const { resolve } = require("path");

module.exports = {
  stories: ["../**/*.story.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config) => {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "~frontend",
            replacement: resolve(process.cwd()),
          },
        ],
      },
    };
  },
};
