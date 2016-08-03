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
