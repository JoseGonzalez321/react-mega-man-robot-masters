import React, { Component, PropTypes } from 'react';
import Toggle                          from './Toggle.jsx';

export default class SortButton extends Component {
  render() {
    const { active, order, clickHandler } = this.props;
    return (
      <Toggle
        clickHandler = {clickHandler}
        text = {order === 'asc' ? 'Ascending' : 'Descending'}
        icon = {order === 'asc' ? 'arrow-circle-up' : 'arrow-circle-down'}
        active = {active}
      />
    );
  }
}
