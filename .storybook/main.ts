import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
      strictMode: true,
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@frontpile/*': path.resolve(__dirname, '../packages/elements/*/src'),
        '@frontpile/variants/*': path.resolve(__dirname, '../packages/variants/*/src'),
      };
    }
    return config;
  },

  docs: {
    autodocs: 'tag',
  },
};

export default config;
