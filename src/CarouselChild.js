import React, { Component } from 'react';
import styles from './child.css';
import { carousel } from './child.css';

export default class CarouselChild extends Component {
  render() {
    console.log(carousel)
    return (
      <div className={styles.child}>
        {this.props.children}
      </div>
    )
  }
}
