import React, { PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown';
import FlipMove from 'react-flip-move';
import {shuffle} from 'lodash';

import * as query from './getData';
import HeaderButtons from './HeaderButtons.jsx';
//import RobotMaster from './RobotMaster.jsx';


import Toggle from './Buttons/Toggle.jsx';

class RobotMasterList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        removedRobotMasters: [],
        robotMasters: [],
        view: 'grid',
        order: 'asc',
        series: [2, 3],
        selectedSeries: '2',
        sortingMethod: 'chronological',
        enterLeaveAnimation: 'accordianHorizontal',
        inProgress: false,
      };

      this.sortShuffle = this.sortShuffle.bind(this);
      this.toggleSort  = this.toggleSort.bind(this);
      this.toggleGrid  = this.toggleGrid.bind(this);
      this.toggleList  = this.toggleList.bind(this);
      this.refresh     = this.refresh.bind(this);
      this.selectSeries = this.selectSeries.bind(this);
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

    selectSeries(e) {
      //Need more elegant way than e.target.textContent
      if (this.state.selectedSeries === e.target.textContent) return;

      this.setState({
        selectedSeries: e.target.textContent,
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

    refresh() {
      this.getData();
    }

    componentDidMount() {
      this.getData();
    }

    getData() {
      const prod = 'megaman-robot-masters.herokuapp.com';
      const local = 'localhost:9001';
      const url = `http://${prod}/bySeriesId/${this.state.selectedSeries}`;

      this.serverRequest = query.getData(url, (robotMastersData) => {
        this.setState({ robotMasters: robotMastersData });
      });
    }

    componentWillUnmount() {
      this.serverRequest.abort();
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.selectedSeries !== prevState.selectedSeries) {
        this.getData();
      }
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
          <h1>{robot.id}</h1>          
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
      const { view, order, sortingMethod, selectedSeries, series } = this.state;
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
            refreshClickHandlder = {this.refresh}
          />
          <div className="dropdown-spacer" style={{ height: 10 }} />
          <h2>Series</h2>
          <Toggle
            text = '2'
            active = {this.state.selectedSeries === '2'}
            clickHandler = {this.selectSeries}
          />
          <Toggle
            text = '3'
            active = {this.state.selectedSeries === '3'}
            clickHandler = {this.selectSeries}
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
