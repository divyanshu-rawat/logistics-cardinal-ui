<h1 align="center">
  <br>
  <span>Logistics Cardinal UI</span>
	<br>
  <br>
  <br>
</h1>

[![npm version](https://badge.fury.io/js/logistics-cardinal-ui.svg)](https://badge.fury.io/js/logistics-cardinal-ui)
[![Travis](https://travis-ci.com/foodora/logistics-cardinal-ui.svg?token=8QZsVnV979uxzcVevAHc&branch=master)](https://travis-ci.com/foodora/logistics-cardinal-ui)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e6688e584bb4e679b6c0753fcc76b3f)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=foodora/logistics-cardinal-ui&utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/6e6688e584bb4e679b6c0753fcc76b3f)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=foodora/logistics-cardinal-ui&utm_campaign=Badge_Coverage)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Made with love](https://img.shields.io/badge/made%20with-%E2%9D%A4%20foodora-D51965.svg)](https://github.com/foodora)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Logistics Cardinal UI is a set of reusable components that are customizable and consistent across teams.

## Example

![Demo](https://user-images.githubusercontent.com/1376113/40906234-81ef7802-67e0-11e8-9b05-81eae724d53d.gif)

> Check out the [Live demo](http://files.foodora.com/logistics-cardinal-ui/index.html).

## Install

```bash
$ yarn add logistics-cardinal-ui
```

## Usage

```js
import React from 'react';
import { Button } from 'logistics-cardinal-ui';

export default function AwesomeButton() {
  return <Button>My Awesome Button</Button>;
}
```

## Contribution

<div align="center">
  <img src="./src/demo/contribution.gif" />
</div>

Suggestions and pull requests are highly encouraged! Please follow the following workflow:

Clone the repository to your local directory

```bash
$ git clone https://github.com/foodora/logistics-cardinal-ui.git
$ cd logistics-cardinal-ui
```

Install all dependencies & Start developing

```bash
$ yarn
$ yarn test
$ yarn storybook
```

Test your new components locally

```bash
$ yarn build
$ yarn link
$ cd to_your_own_project
$ yarn link logistics-cardinal-ui
```

After carefully testing it locally, please open a pull request and we will take care of the rest :unicorn:!

## License

MIT © [Foodora](https://github.com/foodora)
