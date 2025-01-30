import 'dotenv/config';

// utils
import generateExtension from './renderers/generate-extension.js';

/** @type {string[]} List of extensions config without suffix: .ext.json */
const extensionConfigs = [
  'send-personal-letter',
  'send-postcard',
  'send-professional-letter',
  'send-real-penned-letter',
  'send-self-mailer',
  'send-snap-pack-mailer',
];

(async () => {
  await Promise.all(extensionConfigs.map(generateExtension));
})();


