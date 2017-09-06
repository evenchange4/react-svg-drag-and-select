# React-svg-drag-and-select

> A SVG playground to drag and select shape elements.

[![Travis][travis-badge]][travis]
[![Codecov Status][codecov-badge]][codecov]
[![Github Tag][githubTag-badge]][githubTag]
[![node][node]]()
[![npm downloads][npm-downloads]][npm]
[![npm][npm-badge]][npm]

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devDependency-badge]][devDependency]
[![peerDependency Status][peerDependency-badge]][peerDependency]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Install

```cmd
$ yarn add react-svg-drag-and-select
```

## Usage

```js
import SVGContainer from 'react-svg-drag-and-select';

<SVGContainer
  width={300}
  height={300}
  style={{ backgroundColor: 'aliceblue' }}
  onSelectChange={this.onSelectChange}
  onItemsChange={this.onItemsChange}
  items={items}
  isMovable={isMovable}
  isSelectable={!isMovable}
/>
```

> Please see the [story example file](./src/components/SVGContainer/SVGContainer.example.js) for more detail.

## API

## Demo

- https://react-svg-drag-and-select.netlify.com/

## Technology Stacks

- [Storybook](https://github.com/storybooks/storybook): 📓 Interactive development & testing environment for React, React-Native, Vue UI components.
- [PureScript](http://www.purescript.org/): A strongly-typed functional programming language that compiles to JavaScript.
- Travis: CI

## Developer Guide

### Requirements

-   node >= 8.4.0
-   npm >= 5.3.0
-   yarn >= 0.27.5

```
$ git clone https://github.com/evenchange4/react-svg-drag-and-select.git
$ yarn install --pure-lockfile
$ ./node_modules/.bin/bower install

$ yarn start
$ yarn run build
```

### Test

```
$ yarn run format
$ yarn run eslint
$ yarn run test:watch
```

### Github release / NPM release

```
$ npm version patch
$ git push
```

## CONTRIBUTING

*   ⇄ Pull requests and ★ Stars are always welcome.
*   For bugs and feature requests, please create an issue.
*   Pull requests must be accompanied by passing automated tests (`$ yarn run test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[travis-badge]: https://img.shields.io/travis/evenchange4/react-svg-drag-and-select/master.svg?style=flat-square
[travis]: https://travis-ci.org/evenchange4/react-svg-drag-and-select
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-svg-drag-and-select.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-svg-drag-and-select?branch=master
[node]: https://img.shields.io/node/v/react-svg-drag-and-select.svg?style=flat-square
[npm-badge]: https://img.shields.io/npm/v/react-svg-drag-and-select.svg?style=flat-square
[npm]: https://www.npmjs.com/package/react-svg-drag-and-select
[npm-downloads]: https://img.shields.io/npm/dt/react-svg-drag-and-select.svg?style=flat-square
[dependency-badge]: https://david-dm.org/evenchange4/react-svg-drag-and-select.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-svg-drag-and-select
[devDependency-badge]: https://david-dm.org/evenchange4/react-svg-drag-and-select/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/react-svg-drag-and-select#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/react-svg-drag-and-select/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/react-svg-drag-and-select#info=peerDependencies
[githubTag-badge]: https://img.shields.io/github/tag/evenchange4/react-svg-drag-and-select.svg?style=flat-square
[githubTag]: ./CHANGELOG.md
[license-badge]: https://img.shields.io/github/license/evenchange4/react-svg-drag-and-select.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[greenkeeper-badge]: https://badges.greenkeeper.io/evenchange4/react-svg-drag-and-select.svg
[greenkeeper]: https://greenkeeper.io/
[dockerhub-auto-badge]: https://img.shields.io/docker/automated/evenchange4/react-svg-drag-and-select.svg?style=flat-square
[dockerhub]: https://hub.docker.com/r/evenchange4/react-svg-drag-and-select/
[dockerPulls-badge]: https://img.shields.io/docker/pulls/evenchange4/react-svg-drag-and-select.svg?style=flat-square
[dockerSize]: https://microbadger.com/images/evenchange4/react-svg-drag-and-select
[dockerSize-badge]: https://images.microbadger.com/badges/image/evenchange4/react-svg-drag-and-select.svg
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
