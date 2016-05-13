import React, { Component, PropTypes }  from 'react';
import Toggle                           from './Toggle.jsx';

export default class RefreshButton extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <Toggle
        clickHandler = {clickHandler}
        text = 'Refresh'
        icon = 'refresh'
      />
    );
  }
}
