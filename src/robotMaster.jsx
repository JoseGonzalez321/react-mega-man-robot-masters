import React, {Component, PropTypes} from 'react';

export default class RobotMaster extends Component {
    render() {
      const { id, name, avatar, sprite1, weapon, weakness } = this.props;
      const listClass = `list-item card ${this.props.view}`;
      const style = { zIndex: 100 - this.props.index };

      return (
            <li id={id} className={listClass} style={style}>
                <img src={avatar}/>
                <img className="img-sprite" src={sprite1} />
                <h1 className="robot-name">{name}</h1>
                <h3 className="robot-serial">DWN {id}</h3>
                <button onClick={this.props.clickHandler}>
                    <i className="fa fa-close"/>
                </button>
                <div className="clearfix"/>
            </li>
        );
    }
};
