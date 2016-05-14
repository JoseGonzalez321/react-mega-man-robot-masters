import React, { PropTypes }  from 'react';
import Toggle from './Toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  text: 'Grid',
  icon: 'th',  
};

class GridButton extends React.Component {
  render() {
    return <Toggle {...this.props} />;
  }
}

GridButton.propTypes = propTypes;
GridButton.defaultProps = defaultProps;

export default GridButton;
