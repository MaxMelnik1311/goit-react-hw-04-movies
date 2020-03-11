import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './styles.module.css';

export default class Loading extends Component {
  state = {};

  render() {
    return (
      <div className={styles.loading}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000}
        />
      </div>
    );
  }
}
