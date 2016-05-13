import React, {Component, PropTypes}        from 'react';
import ReactDOM                             from 'react-dom';
import FlipMove                             from 'react-flip-move';
import classNames                           from 'classNames';
import {shuffle}                            from 'lodash';

import * as query                           from './getData';
import RobotMaster                          from './RobotMaster.jsx';
import HeaderButtons                        from './HeaderButtons.jsx';

class RobotMasterList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        removedRobotMasters: [],
        robotMasters: [],
        view: 'grid',
        order: 'asc',
        sortingMethod: 'chronological',
        enterLeaveAnimation: 'accordianHorizontal',
        inProgress: false,
      };

      this.sortShuffle = this.sortShuffle.bind(this);
      this.toggleSort  = this.toggleSort.bind(this);
      this.toggleGrid  = this.toggleGrid.bind(this);
      this.toggleList  = this.toggleList.bind(this);
    }

    toggleSort() {
      const sortAsc  = (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10);
      const sortDesc = (a, b) => parseInt(b.id, 10) - parseInt(a.id, 10);

      this.setState({
        order: (this.state.order === 'asc' ? 'desc' : 'asc'),
        sortingMethod: 'chronological',
        robotMasters: this.state.robotMasters.sort(this.state.order === 'asc' ? sortDesc : sortAsc),
      });
    }

    toggleList() {
      this.setState({
        view: 'list',
        enterLeaveAnimation: 'accordianVertical',
      });
    }

    toggleGrid() {
      this.setState({
        view: 'grid',
        enterLeaveAnimation: 'accordianHorizontal',
      });
    }

    componentDidMount() {
      //var url = 'http://megaman-robot-masters.herokuapp.com/avataronly/';
      var url = 'http://localhost:9001/bySeriesId/2';

      this.serverRequest = query.getData(url, (robotMastersData) => {
        this.setState({ robotMasters: robotMastersData });
      });
    }

    componentWillUnmount() {
      this.serverRequest.abort();
    }

    moveRobotMaster(source, dest, index = 0) {
      if (this.state.inProgress) return;

      let sourceRobotMasters = this.state[source].slice();
      let destRobotMasters = this.state[dest].slice();

      if (!sourceRobotMasters.length) return;

      destRobotMasters = [].concat(sourceRobotMasters.splice(index, 1), destRobotMasters);

      this.setState({
        [source]: sourceRobotMasters,
        [dest]:   destRobotMasters,
        inProgress: true,
      });
    }

    renderRobotMasters() {
      const { robotMasters, view } = this.state;

      return robotMasters.map((robot, i) => {
        return (
          <RobotMaster
            key = {robot.id}
            view = {view}
            index= {i}
            clickHandler ={() => this.moveRobotMaster('robotMasters', 'removedRobotMasters', i)}
            {...robot}
          />
        );
      });
    }

    sortShuffle() {
      this.setState({
        sortingMethod: 'shuffle',
        robotMasters: shuffle(this.state.robotMasters),
      });
    }

    render() {
      const { view, order, sortingMethod } = this.state;
      return (
        <div id="shuffle" className={view}>
          <HeaderButtons
            view = {view}
            order = {order}
            sortingMethod = {sortingMethod}
            listClickHandler = {this.toggleList}
            gridClickHandler = {this.toggleGrid}
            sortClickHandler = {this.toggleSort}
            shuffleClickHandler = {this.sortShuffle}
          />
          <ul>
            <FlipMove
              staggerDurationBy="30"
              duration={500}
              onFinishAll={() => {
                // TODO: Remove the setTimeout, when the bug is fixed.
                setTimeout(() => this.setState({ inProgress: false }), 1);
              }}>
              { this.renderRobotMasters() }
            </FlipMove>
          </ul>
        </div>
      );
    }
}

ReactDOM.render(<RobotMasterList />, document.getElementById('root'));
