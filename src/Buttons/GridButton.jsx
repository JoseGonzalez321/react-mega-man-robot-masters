import React, { Component, PropTypes }  from 'react';
import Toggle                   from './Toggle.jsx';

export default class GridButton extends Component {
  render() {
    const { active, clickHandler } = this.props;
    return (
      <Toggle
        clickHandler = {clickHandler}
        text = 'Grid'
        icon = 'th'
        active = {active}
      />
    );
  }
}
