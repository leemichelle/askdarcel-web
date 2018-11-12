import React from 'react';
import RelativeOpeningTime from '../../components/listing/RelativeOpeningTime';
import './ListingDemoPage.scss';

// We sort this so the first item is today
const schedule_shorthand = [
  [[900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200]],
  [[[915, 1200], [1300, 1800]], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200], [900, 1200]],
  [[0, 2359], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200], [0, 2359]],
  [[0, 2359], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200], null], // Closed all sunday, 24h Mon
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359]], // 24/7
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2125]],
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [2155, 2300]],
  [[900, 1800], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], null],
  [[900, 1800], null, [0, 2359], [0, 2359], [0, 2359], [0, 2359], [900, 2200]],
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [[0, 900], [1100, 1800], [1900, 2300]]],
];

export class ListingDebugPage extends React.Component {
  renderTimestamps() {
    // const orderedDaysOfTheWeek
    const schedules = schedule_shorthand.map(sched => {
      const days = [];
      sched.forEach((day, i) => {
        if (day === null) { return; }
        const instancesOfToday = Array.isArray(day[0]) ? day : [day];
        instancesOfToday.forEach(times => {
          days.push({
            day: RelativeOpeningTime.daysOfWeek[i],
            opens_at: times[0],
            closes_at: times[1],
          });
        });
      });
      return days;
    }).map((schedule_days, i) => ({ schedule_days, id: i }));
    return schedules.map(schedule => (
      <p><RelativeOpeningTime key={schedule.id} schedule={schedule} /></p>
    ));
  }

  render() {
    return (
      <div className="demo-page">
        <h1>RelativeOpeningTime</h1>
        { this.renderTimestamps() }
      </div>
    );
  }
}
