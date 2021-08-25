# Next.js TypeScript React Project Template

## Introduction

This is a boilerplate foundation for creating other fullstack web applications from. I have taken inspiration from a number of sources and my past learning to pull together a slightly opinionated project template for my own development needs, but others are welcome to use as they like. I find this a good way of getting to understand a new framework, in this case Nextjs. This project uses [React](https://facebook.github.io/react/), [TypeScript](https://typescriptlang.org/) and [Next.js](https://nextjs.org/) and it comes with a style guide based on the eslint recommendations and the [airbnb style guide](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

Use the [TypeScript Language Docs](https://www.typescriptlang.org/docs/) and the [TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react#hooks) as well as [this article](https://www.sitepoint.com/react-with-typescript-best-practices/) for advice on typescript.

## Getting Started

First, clone the repo via git and install dependencies by running:

```bash
yarn
```

### Starting Development

Start the app in the development environment:

```bash
yarn dev
```

### Packaging for Production

To package apps for deployment use:

```bash
yarn build
```

## Features

- [x] **EditorConfig**: This helps your editor produce code that looks like your style guide as you go. While this isn't strictly necessary in order to achieve your goals, it's nice if you're always looking at code that follows the same coding styles. Otherwise if you don't have EditorConfig, as you're typing your editor will auto-format differently to the rest of the code base, which is confusing. Of course if you've set up prettier it'll fix it before it goes into your code base, but still, why would you want to look at it in one format while you're writing it and then have it switch when you go to commit? Might as well be consistent.

- [x] **Prettier**: Automatically formats your code. I like to set it up to do this when I stage my files for a commit, so that it's physically impossible for me to commit code that doesn't match my style guide.

- [x] **ESLint**: So why would you want a linter too? Because ESLint does more than just style. It picks up when you declare variables you don't use, or reference things that aren't defined, amongst a few other niceties. So while its role diminishes somewhat compared to the days before prettier, it's still useful to have in a project to catch the other errors.

<!-- - [x] **redux-saga**: A library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

- [x] **redux-saga-routines**: A smart action creator for Redux. Useful for any kind of async actions like fetching data. Also fully compatible with Redux Saga and Redux Form.

- [x] **redux**: A predictable state container for JavaScript apps.

- [x] **reselect**: Simple selector library for Redux (and others) inspired by getters in [NuclearJS](https://optimizely.github.io/nuclear-js/), subscriptions in re-frame and this proposal from speedskater.

- [x] **Immer**: (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way. It is based on the copy-on-write mechanism

- [x] **@testing-library/react**: Simple and complete React DOM testing utilities that encourage good testing practices.

- [x] **SEO**: The advantages of this approach is to be able to create Rich User experiences in a uniform way, without compromising Search Engine Optimisation (SEO) factors that are key to good ranking on Google and other search engines. -->

- [x] **Typefaces**: Self-hosting is significantly faster. Loading a typeface from Google Fonts or other hosted font service adds an extra (blocking) network request.

- [x] **Emotion**: A library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities.

## License

MIT ©

Generated from:

- [Next Typescript Stripe Example](https://github.com/stripe-samples/nextjs-typescript-react-stripe-js)
- [React Next Boilerplate](https://www.reactnextboilerplate.com/)
- [this article](https://betterprogramming.pub/complete-guideline-to-creating-a-modern-react-app-with-typescript-from-scratch-cebbb5817d8)
- [Electron React Boilerplate](https://electron-react-boilerplate.js.org/)
- [Airbnb styleguide setup](https://www.youtube.com/watch?v=SydnKbGc7W8&t=992s)
