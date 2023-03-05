import React from 'react';
import DayCard from './DayCard';
import TimeGrid from './TimeGrid';

const timetable = () => {
  const [cellIds, setCellIds] = React.useState([]);
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
  return (
    <div className="timetable">
      <div className="day-cards">
        {days.map(day => <DayCard day={day} />)}
      </div>
      <TimeGrid />
    </div>
  )
}

export default timetable
