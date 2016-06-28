import React, { PropTypes } from 'react';
import ListButton from './Buttons/ListButton.jsx';
import GridButton from './Buttons/GridButton.jsx';
import SortButton from './Buttons/SortButton.jsx';
import ShuffleButton from './Buttons/ShuffleButton.jsx';
import RefreshButton from './Buttons/RefreshButton.jsx';

const propTypes = {
  view: PropTypes.string,
  order: PropTypes.string,
  sortingMethod: PropTypes.string,
  listClickHandler: PropTypes.func,
  gridClickHandler: PropTypes.func,
  sortClickHandler: PropTypes.func,
  shuffleClickHandler: PropTypes.func,
  refreshClickHandlder: PropTypes.func,
};

class HeaderButtons extends React.Component {
  render() {
    const { view, listClickHandler, gridClickHandler } = this.props;
    const { order, sortingMethod, sortClickHandler, shuffleClickHandler } = this.props;
    const { refreshClickHandlder } = this.props;

    return (
      <header>
        <div className = "abs-left">
          <ListButton
            clickHandler = {listClickHandler}
            active = {view === 'list'}
          />
          <GridButton
            clickHandler = {gridClickHandler}
            active = {view === 'grid'}
          />
        </div>
        <div className = "abs-right">
          <SortButton
            clickHandler = {sortClickHandler}
            order = {order}
            active = {sortingMethod === 'chronological'}
          />
          <ShuffleButton
            clickHandler = {shuffleClickHandler}
            active = {sortingMethod === 'shuffle'}
          />
          <RefreshButton clickHandler = {refreshClickHandlder} />
        </div>
      </header>
    );
  }
}

HeaderButtons.propTypes = propTypes;

export default HeaderButtons;
