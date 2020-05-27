import "@storybook/addon-docs/register";
import '@storybook/addon-knobs/register';
import 'storybook-readme/register';

import { addons } from '@storybook/addons';
import { customStorybookTheme } from "./theme";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: customStorybookTheme,
  isToolshown: false
});