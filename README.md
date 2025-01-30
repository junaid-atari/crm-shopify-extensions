# Shopify Flow Extension Generator

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
6. Run `yarn deploy` to deploy the extensions.

## References

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)
- [Shopify Flow](https://shopify.dev/docs/apps/build/flow)
- [Shopify Actions](https://shopify.dev/docs/apps/build/flow/actions)
- [Shopify - Build the configuration UI](https://shopify.dev/docs/apps/build/flow/actions/build-config-ui)
