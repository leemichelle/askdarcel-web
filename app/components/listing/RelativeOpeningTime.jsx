import React from 'react';
import PropTypes from 'prop-types';

export class RelativeOpeningTime extends React.Component {
  static parseAsDate(fourOrThreeDigitNumber) {
    const fourDigitNumber = `0000000${fourOrThreeDigitNumber}`.slice(-4);
    const hour = Number(`${fourDigitNumber}`.slice(0, 2)) * 1000 * 60 * 60;
    const mins = Number(`${fourDigitNumber}`.slice(2, 4)) * 1000 * 60;
    // console.log(fourOrThreeDigitNumber, '->', fourDigitNumber, '->', [hour, mins]);
    return new Date(hour + mins);
  }

  static parseSchedule(schedule_days, currentDate = new Date()) {
    if (!schedule_days) return { text: '', classes: '' };

    const STATUS_CLOSED = 'status-red';
    const STATUS_OPEN = 'status-green';
    const STATUS_CAUTION = 'status-amber';
    const currentDay = currentDate.getDay(); // Take 1 away for actual index
    const currentDayString = RelativeOpeningTime.daysOfWeek[currentDay];
    const tomorrowDayString = RelativeOpeningTime.daysOfWeek[currentDay > 6 ? 0 : currentDay];

    const todayHours = schedule_days.filter(hours => hours.day === currentDayString);
    const tomorrowHours = schedule_days.filter(hours => hours.day === tomorrowDayString);
    const daysOpen24Hours = schedule_days.filter(hours => hours.opens_at === 0 && hours.closes_at === 2359);
    if (todayHours.length === 0) return { text: 'Closed Today', classes: STATUS_CLOSED };
    if (daysOpen24Hours.length === 7) return { text: 'Open 24/7', classes: STATUS_OPEN };

    const todayTime = Number(`${currentDate.getHours()}${currentDate.getMinutes()}`);

    // This won't catch weird data cases like multiple overlapping opening times if the user inputs badly
    for (const hours of todayHours) {
      if (hours.opens_at === 0 && hours.closes_at === 2359) return { text: 'Open 24h today', classes: STATUS_OPEN };

      const opens = RelativeOpeningTime.parseAsDate(hours.opens_at);
      const closes = RelativeOpeningTime.parseAsDate(hours.closes_at);
      const now = RelativeOpeningTime.parseAsDate(todayTime);

      if (todayTime > hours.opens_at && todayTime < hours.closes_at) {
        const minutesUntilClosing = (closes - now) / 1000 / 60;
        if (minutesUntilClosing <= 30) return { text: `Closes in ${minutesUntilClosing} mins`, classes: STATUS_CAUTION };
        return { text: 'Open Now', classes: STATUS_OPEN };
      }

      const minutesUntilOpening = Math.abs((now - opens) / 1000 / 60);
      if (minutesUntilOpening < 30) return { text: `Opens in ${minutesUntilOpening} mins`, classes: STATUS_CAUTION };
    }

    if (tomorrowHours.length) {
      // TODO This is overkill for now and not sure it improves the UX much. Can address later if desired
      // const earliestOpeningTomorrow = tomorrowHours.reduce((earliest, time) => {
      //   if (!earliest) return time;
      //   return time.opens_at < earliest.opens_at ? time : earliest;
      // });

      // if (earliestOpeningTomorrow.opens_at === 0 && earliestOpeningTomorrow.closes_at === 2359) return { text: 'Open 24h tomorrow', classes: STATUS_CLOSED };
      return { text: 'Closed Until Tomorrow', classes: STATUS_CLOSED };
      // const openingTimeTomorrow = parseAsDate(earliestOpeningTomorrow.opens_at).getTime()
      // return { text: `Opens Tomorrow at ${moment(openingTimeTomorrow).tz().format('h:mm a')}`, classes: STATUS_CLOSED };
    }

    return { text: 'Closed Now', classes: STATUS_CLOSED };
  }

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


  render() {
    const { text, classes } = RelativeOpeningTime.parseSchedule(this.props.schedule.schedule_days, this.props.currentDate);
    return (
      <span className={`relative-opening-time ${classes}`}>
        { text }
      </span>
    );
  }
}

RelativeOpeningTime.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

RelativeOpeningTime.propTypes = {
  schedule: PropTypes.object.isRequired,
  currentDate: PropTypes.object,
};

RelativeOpeningTime.defaultProps = {
  currentDate: new Date(),
};
