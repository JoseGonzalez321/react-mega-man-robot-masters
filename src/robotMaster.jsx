import React, { PropTypes } from 'react';

const propTypes = {
  view: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  sprite1: PropTypes.string,
  weapon: PropTypes.string,
  weakness: PropTypes.string,
};

class RobotMaster extends React.Component {
  render() {
    const { view, id, name, avatar, sprite1, weapon, weakness } = this.props;
    const listClass = `list-item card ${view}`;
    const style = { zIndex: 100 - this.props.index };
    return (
      <li id={id} className={listClass} style={style}>
        <img src={avatar}/>
        <img className="img-sprite" src={sprite1} />

        <h1 className="robot-name">{name}</h1>
        <h1 className="robot-serial">DWN {id}</h1>
        <button onClick={this.props.clickHandler}>
          <i className="fa fa-close"/>
        </button>
        <div className="clearfix"/>
      </li>
    );
  }
}

RobotMaster.PropTypes = propTypes;

export default RobotMaster;
