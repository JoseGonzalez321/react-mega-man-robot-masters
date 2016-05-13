import React, { Component, PropTypes } from 'react';
import Toggle                          from './Toggle.jsx';

export default class ListButton extends Component {
  render() {
    const { active, clickHandler } = this.props;
    return (
      <Toggle
        clickHandler = {clickHandler}
        text = 'List'
        icon = 'list'
        active = {active}
      />
    );
  }
}
