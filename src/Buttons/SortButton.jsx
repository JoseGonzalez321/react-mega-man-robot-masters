import React, { PropTypes } from 'react';
import Toggle from './Toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  order: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  text: 'Ascending',
  icon: 'arrow-circle-up',
  order: 'asc',
};

class SortButton extends React.Component {
  render() {
    const { order } = this.props;
    return (
      <Toggle
        text = {order === 'asc' ? 'Ascending' : 'Descending'}
        icon = {order === 'asc' ? 'arrow-circle-up' : 'arrow-circle-down'}
        {...this.props}

      />
    );
  }
}

SortButton.propTypes = propTypes;
SortButton.defaultProps = defaultProps;

export default SortButton;
