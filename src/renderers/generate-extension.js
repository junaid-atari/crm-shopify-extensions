/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-30 17:18:23
 */

import path from 'node:path';
import fs from 'node:fs';
import merge from 'deepmerge';
import nunjucks from 'nunjucks';

// helpers
import { readFile, readJsonFile } from '../helpers/file-helper.js';

nunjucks.configure({ autoescape: false });

const frontendEndpoint = process.env?.OLC_SHOPIFY_FRONTEND_ENDPOINT?.replace?.(/\/$/, '') ?? '';
const backendEndpoint = process.env?.OLC_SHOPIFY_BACKEND_ENDPOINT?.replace?.(/\/$/, '') ?? '';

const rootPath = path.join(import.meta.dirname, '..', '..');

/**
 * @typedef {Record<string, any>} GlobalVariables
 * @property {string} rootPath - Root path
 * @property {string} srcPath - Src path
 * @property {string} templatesPath - Templates path
 * @property {string} extensionsPath - Extensions path
 */

/**
 * @typedef {Record<string, any>} TemplateConfig
 * @property {string} handle - Extension handle name
 * @property {string} name - Extension title
 * @property {string} description - Description
 * @property {string} templatePath - Template path
 * @property {string} targetPath - Target file path
 */

/**
 * @type {GlobalVariables}
 */
const globalVariables = {
  rootPath,
  srcPath: path.join(rootPath, 'src'),
  templatesPath: path.join(rootPath, 'src', 'templates'),
  extensionsPath: path.join(rootPath, 'src', 'extensions'),
};

/**
 * Render and generate flow extension
 * @param {string} filename Template filename
 * @returns {Promise<void>}
 */
const generateExtension = async filename => {
  /** @type {string} */
  const configFile = path.join(globalVariables.extensionsPath, `${filename}.ext.json`);

  /** @type {TemplateConfig} */
  const templateConfig = await readJsonFile(configFile);

  if (templateConfig == null)
    throw new Error(`Failed to load extension config file: '${configFile}'`);

  /** @type {TemplateConfig&GlobalVariables} */
  const variables = merge.all([globalVariables, templateConfig, {
    runtimeUrl: `${backendEndpoint}/handler/process`,
    validationUrl: `${backendEndpoint}/handler/validate`,
    configPageUrl: `${frontendEndpoint}`,
    configPagePreviewUrl: `${backendEndpoint}/handler/config-preview`,
  }]);

  /** @type {string} */
  const templateFilePath = path.normalize(nunjucks.renderString(templateConfig.templatePath, variables));

  if (!fs.existsSync(templateFilePath))
    throw new Error(`Template file not found: '${templateFilePath}'`);

  const renderedContent = nunjucks.renderString(await readFile(templateFilePath), variables);

  /** @type {string} */
  const targetFilePath = path.normalize(nunjucks.renderString(templateConfig.targetPath, variables));

  fs.unlinkSync(targetFilePath);
  fs.writeFileSync(targetFilePath, renderedContent, { encoding: 'utf8' });

  console.log(`Extension generated [${templateConfig.handle}]: '${path.relative(rootPath, targetFilePath)}'`);
};

export default generateExtension;
