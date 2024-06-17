# nextjs-chakra-ui starter kit

## Overview

This Next.js starter kit comes with formatting, linting, example components, testing and styling. Here is the complete list of technologies and tooling used in this kit:

- [Next.js 13](https://nextjs.org/blog/next-13)
- [Chakra UI](https://chakra-ui.com/)
- [Jest](https://jestjs.io/) - Test runner
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Storybook](https://storybook.js.org/) - Component library
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Commands

- `yarn run dev` - Starts the development server.
- `yarn run test` - Runs the unit tests.
- `yarn run storybook` - Starts the Storybook UI.
- `yarn run lint` - Runs ESLint on the project.
- `yarn run format:fix` - Formats code for the entire project

## State management

For this starter kit we are not using a global state manager but instead storing state inside the routes for Next.js. For example, please look at the `/src/pages/counter-example.tsx` and `src/pages/fetch-example.tsx` files.

## Testing

### Unit testing

The unit tests for the components can be found in the `__tests__` directory.

```
.
├── StickyNote.test.tsx
└── index.test.tsx
```

### Storybook's Accessibility testing

This starter kit comes with the `@storybook/addon-a11y` which is used to check for common accessibility errors in your components. When you run `yarn run storybook`, each story will show detailed explanations with suggested fixes if errors are found.


### Updating the version

Patch

```shell
 ./version.sh patch
```

Minor

```shell
./version.sh minor 
```

Major

```shell
./version.sh major
```
