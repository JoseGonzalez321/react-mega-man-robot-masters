import React, { PropTypes }  from 'react';
import Toggle from './Toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
};

const defaultProps = {
  text: 'Refresh',
  icon: 'refresh',
};

class RefreshButton extends React.Component {
  render() {
    return <Toggle {...this.props} />;
  }
}

RefreshButton.propTypes = propTypes;
RefreshButton.defaultProps = defaultProps;

export default RefreshButton;
