import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import drizzlePlugin from "eslint-plugin-drizzle";
import eslintPrettierConfig from "../prettier.config";
import {fixupPluginRules} from "@eslint/compat"


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPrettierConfig,
  {
    plugins:{
      drizzle:fixupPluginRules(drizzlePlugin),
      
    }
  }
];