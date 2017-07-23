import React, { Component } from 'react';
import CarouselChild from './CarouselChild';

export default class Carousel extends Component {

  static Child = CarouselChild

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
