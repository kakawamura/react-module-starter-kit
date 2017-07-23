import React, {Component} from 'react';
import Carousel from '../src/index.js';

export default class TextButton extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Child>a</Carousel.Child>
          <Carousel.Child>b</Carousel.Child>
          <Carousel.Child>c</Carousel.Child>
        </Carousel>
      </div>
    )
  }
}
