import React, { Component, PropTypes } from 'react';
import Toggle                          from './Toggle.jsx';

export default class ShuffleButton extends Component {
  render() {
    const { active, clickHandler } = this.props;
    return (
      <Toggle
        clickHandler = {clickHandler}
        text = 'Shuffle'
        icon = 'random'
        active = {active}
      />
    );
  }
}
