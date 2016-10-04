import React, { Component } from 'react';

import styles from './App.css';
import logo from './logo.svg';
import data from './sampleData.json';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React, {data.name}!</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
