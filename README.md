# Shopify Flow Extension Generator

![image](https://github.com/user-attachments/assets/eacb8ff9-5a96-4026-93e7-c44f8f12073c)

## Prerequisites
- Runtime: NodeJs v23.5+
- Package Manager: Yarn
- Template Engine: [Nunjucks](https://mozilla.github.io/nunjucks/)
- Deployment: [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)

## Usage
1. Open the terminal
2. Run `yarn` to install dependencies
3. Tweak `.env` file. (Note: all variables are required, see `.env.example`)
4. Change `src/templates/shopify-extension.njk` file.
5. Run `yarn render` to generate the extensions.

```shell
../openletterconnect>yarn render
yarn run v1.22.22
$ node src/index.js
Extension generated [send-personal-letter]: 'extensions/send-personal-letter/shopify.extension.toml'
Extension generated [send-postcard]: 'extensions/send-postcard\shopify.extension.toml'
Extension generated [send-professional-letter]: 'extensions/send-professional-letter/shopify.extension.toml'
Extension generated [send-real-penned-letter]: 'extensions/send-real-penned-letter/shopify.extension.toml'
Extension generated [send-snap-pack-mailer]: 'extensions/send-snap-pack-mailer/shopify.extension.toml'
Extension generated [send-self-mailer]: 'extensions/send-self-mailer/shopify.extension.toml'
Done in 0.34s.
```

6. Run `yarn deploy` to deploy the extensions.

## References

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)
- [Shopify Flow](https://shopify.dev/docs/apps/build/flow)
- [Shopify Actions](https://shopify.dev/docs/apps/build/flow/actions)
- [Shopify - Build the configuration UI](https://shopify.dev/docs/apps/build/flow/actions/build-config-ui)
