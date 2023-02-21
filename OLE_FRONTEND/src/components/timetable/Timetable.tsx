import React from 'react';
import * as activities from '../../config/activities.json';
import { Activity } from '../../config/activity';
import DayCard from './DayCard';

const timetable = () => {

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
  return (
    <div className="timetable">

      <div className="day-cards">
        {days.map(day => <DayCard day={day}/>)}
      </div>

    </div>
  )
}

export default timetable