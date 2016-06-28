import React, { PropTypes } from 'react';
import Toggle from './Toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  text: 'Shuffle',
  icon: 'random',
};

class ShuffleButton extends React.Component {
  render() {
    return <Toggle {...this.props} />;
  }
}

ShuffleButton.propTypes = propTypes;
ShuffleButton.defaultProps = defaultProps;

export default ShuffleButton;
