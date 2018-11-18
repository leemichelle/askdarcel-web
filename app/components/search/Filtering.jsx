import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getCurrentDayTime } from '../../utils/index';

class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNow: false,
      oldPathname: '',
      oldSearch: '',
    };
    this.toggleOpenNow = this.toggleOpenNow.bind(this);
  }

  toggleOpenNow() {
    const currentValue = this.state.openNow;
    const currentDayTime = getCurrentDayTime();
    const currentLocation = browserHistory.getCurrentLocation();
    const pathname = currentLocation.pathname;
    const search = currentLocation.search;
    const { oldPathname, oldSearch } = this.state;


    if (currentValue === true) {
      browserHistory.push({
        pathname: oldPathname,
        search: oldSearch,
      });
    } else {
      // save the current URL in this components state so we can use it when
      // 'Open now' is toggled off
      this.setState({ oldPathname: pathname, oldSearch: search });
      // refinementList[open_times][0]=F-11:30
      browserHistory.push({
        pathname,
        search: `${search}&refinementList[open_times][0]=${currentDayTime}`,
      });
    }
    // refinementList[open_times][0]=F-11:30
    this.setState({ openNow: !currentValue });
  }
  render() {
    const { openNow } = this.state;
    return (
      <div className="filter-container">
        <div className="search-filters">
          <button
            className={`filter-chip ${openNow ? 'active' : ''}`}
            onClick={this.toggleOpenNow}
          >
            Open now
          </button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    userLocation: state.user.location,
  };
}

export default connect(mapStateToProps)(Filtering);
