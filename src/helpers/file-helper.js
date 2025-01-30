/**
 * @Author: Junaid Atari junaid.attari@invozone.dev
 * @Date: 2025-01-30 17:30:15
 */

import fs from 'node:fs/promises';

/**
 * Reads a file
 * @param {string} filename - Absolute file path
 * @returns {Promise<string>}
 */
export const readFile = async filename => {
  return fs.readFile(filename, { encoding: 'utf8' });
};

/**
 * Reads a JSON file
 * @param {string} filename - Absolute file path
 * @returns {Promise<any>}
 */
export const readJsonFile = async filename => {
  const content = await readFile(filename);

  try {
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
};
