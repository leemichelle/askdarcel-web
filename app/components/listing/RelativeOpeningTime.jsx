import React from 'react';
import PropTypes from 'prop-types';
import { buildHoursText } from '../../utils';

const parseAsDate = (fourDigitNumber) => {
  const hour = Number(`${fourDigitNumber}`.slice(0, 2)) * 1000 * 60 * 60;
  const mins = Number(`${fourDigitNumber}`.slice(2, 4)) * 1000 * 60;
  // console.log('time:', hour, mins);
  return new Date(hour + mins);
};

class RelativeOpeningTime extends React.Component {
  constructor(...args) {
    super(...args);
    this.tick = null;
    this.state = {};
  }

  componentWillMount() {
    this.tick = setInterval(() => this.setState(this.state), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  static parseSchedule(schedule_days) {
    if (!schedule_days) return { text: '', classes: '' };

    const STATUS_CLOSED = 'status-red';
    const STATUS_OPEN = 'status-green';
    const STATUS_CAUTION = 'status-amber';

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentDayString = RelativeOpeningTime.daysOfWeek[currentDay];

    const todayHours = schedule_days.filter(hours => hours.day === currentDayString);
    const tomorrowHours = schedule_days.filter(hours => hours.day === RelativeOpeningTime.daysOfWeek[currentDay + 1 > 6 ? 0 : currentDay + 1]);
    const daysOpen24Hours = schedule_days.filter(hours => hours.opens_at === 0 && hours.closes_at === 2359)

    if (todayHours.length === 0) return { text: 'Closed Today', classes: STATUS_CLOSED };
    if (daysOpen24Hours.length === 7) return { text: 'Open 24/7', classes: STATUS_OPEN };

    const todayTime = Number(`${currentDate.getHours()}${currentDate.getMinutes()}`);

    // This won't catch weird data cases like multiple overlapping opening times if the user inputs badly
    for (const hours of todayHours) {
      if (hours.opens_at === 0 && hours.closes_at === 2359) return { text: 'Open 24 hours today', classes: STATUS_OPEN };

      const opens = parseAsDate(hours.opens_at);
      const closes = parseAsDate(hours.closes_at);
      const now = parseAsDate(todayTime);

      if (todayTime > hours.opens_at && todayTime < hours.closes_at) {
        const minutesUntilClosing = (closes - now) / 1000 / 60;
        if (minutesUntilClosing <= 30) return { text: `Closes in ${minutesUntilClosing} mins`, classes: STATUS_CAUTION };
        return { text: 'Open Now', classes: STATUS_OPEN };
      }

      const minutesUntilOpening = Math.abs((now - opens) / 1000 / 60);
      if (minutesUntilOpening < 30) return { text: `Opens in ${minutesUntilOpening} mins`, classes: STATUS_CAUTION };
    }

    if (tomorrowHours.length) {
      const earliestOpeningTomorrow = tomorrowHours.reduce((earliest, time) => {
        if (!earliest) return time;
        return time.opens_at < earliest.opens_at ? time : earliest;
      });

      if (earliestOpeningTomorrow.opens_at === 0 && earliestOpeningTomorrow.closes_at === 2359) return { text: 'Open 24 hours tomorrow', classes: STATUS_CLOSED };
      // return { text: `Opens Tomorrow at ${parseAsDate(earliestOpeningTomorrow.opens_at).getTime()}`, classes: STATUS_CLOSED };
    }

    return { text: 'Closed Now', classes: STATUS_CLOSED };
  }

  render() {
    // const classes = 'relativeTime';
    // const text = buildHoursText(this.props.schedule.schedule_days);
    const relative = RelativeOpeningTime.parseSchedule(this.props.schedule.schedule_days);

    // console.log(relative);

    return (
      <span className={`relative-opening-time ${relative.classes}`}>
        { relative.text }
      </span>
    );
  }
}

RelativeOpeningTime.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

RelativeOpeningTime.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default RelativeOpeningTime;
