import React, {Component} from 'react';
import { printKazushi } from '../src/index.js';

export default class TextButton extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <button onClick={e => this.test()}>Text Me!</button>
      </div>
    )
  }

  test() {
    printKazushi();    
  }
}
