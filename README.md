jest-css-modules-example
=====================

An example of mocking CSS Modules using an [ES6 Proxy](https://github.com/keyanzhang/identity-obj-proxy) with [Jest](https://facebook.github.io/jest). For more information, please check https://facebook.github.io/jest/docs/tutorial-webpack.html.

## tl;dr

For a component like
```js
import React, { Component } from 'react';

import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.hello}>Hello, world!</h1>
      </div>
    );
  }
}
```

it generates a snapshot as below:
```js
exports[`test App renders correctly 1`] = `
<div
  className="root">
  <h1
    className="hello">
    Hello, world!
  </h1>
</div>
`;
```
