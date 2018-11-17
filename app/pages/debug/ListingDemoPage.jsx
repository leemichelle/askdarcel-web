import React from 'react';
import RelativeOpeningTime from '../../components/listing/RelativeOpeningTime';
import './ListingDemoPage.scss';

// We sort this so the first item is today
const schedule_shorthand = [
  [[900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200]],
  [[[915, 1130], [1300, 1800]], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200], [900, 1200]],
  [[0, 2359], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200], [0, 2359]],
  [[0, 900], [900, 1800], [900, 1800], [900, 1800], [900, 1800], [900, 1200], null], // Closed all sunday, 24h Mon
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359]], // 24/7
  [[200, 1800], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2125]],
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [2155, 2300]],
  [[0, 1100], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [2155, 2300]],
  [[1000, 1800], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], null],
  [[[900, 1200], [1800, 2000], [2200, 2359]], null, [0, 2359], [0, 2359], [0, 2359], [0, 2359], [900, 2200]],
  [[0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [0, 2359], [[0, 900], [1100, 1800], [1900, 2300]]],
];

export class ListingDebugPage extends React.Component {
  renderTimestamps() {
    const today = new Date().getDay();
    const daysOfWeek = RelativeOpeningTime.daysOfWeek.slice();
    const todayAndAfter = daysOfWeek.splice(today - 1);
    const orderedDaysOfTheWeek = todayAndAfter.concat(daysOfWeek);
    // console.log('putting today first', today, orderedDaysOfTheWeek, { daysOfWeek, todayAndAfter });
    const schedules = schedule_shorthand.map(sched => {
      const days = [];
      sched.forEach((day, i) => {
        if (day === null) { return; }
        const instancesOfToday = Array.isArray(day[0]) ? day : [day];
        instancesOfToday.forEach(times => {
          days.push({
            day: orderedDaysOfTheWeek[i],
            opens_at: times[0],
            closes_at: times[1],
          });
        });
      });
      return days;
    }).map((schedule_days, i) => ({ schedule_days, id: i }));
    return schedules.map(schedule => (
      <p>
        <RelativeOpeningTime key={schedule.id} schedule={schedule} />
        {/* <pre>{ JSON.stringify(schedule, null, 2) }</pre> */}
      </p>
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
