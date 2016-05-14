import React, { PropTypes } from 'react';
import Toggle from './Toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  text: 'List',
  icon: 'list',
};

class ListButton extends React.Component {
  render() {
    return <Toggle {...this.props} />;
  }
}

ListButton.propTypes = propTypes;
ListButton.defaultProps = defaultProps;

export default ListButton;
