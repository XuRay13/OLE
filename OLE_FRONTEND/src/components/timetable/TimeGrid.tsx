import React from 'react';
import { Activity, ActivityArray } from '../../config/activity';
import * as activities_data from '../../config/activities.json';
import GridCell from './GridCell';

const TimeGrid = () => {
  const cellArray = generateJSXCells();

  return (
    <div className='time-grid'>
      {cellArray}
    </div>
  );
}

const generateJSXCells = () => {
  const data: Activity[] = activities_data.activities;
  const cellArray: JSX.Element[] = [];

  const map = new Map();
  map.set(0, "monday");
  map.set(1, "tuesday");
  map.set(2, "wednesday");
  map.set(3, "thursday");
  map.set(4, "friday");

  // if json object exists where it has fields start_time == i +  8 && day == map.get(j)
  // i+8 takes offset from 8am. map.get(j) gets the corresponding day set above

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 5; j++) {
      const activity = data.find(activity => activity.startTime == i + 8 && activity.day == map.get(j));
      cellArray.push(<GridCell activity={activity} />)
    }
  }


  return cellArray;
}

export default TimeGrid;
