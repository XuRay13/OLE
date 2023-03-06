import React from 'react';
import { Activity, ActivityArray } from '../../config/activity';
import * as activities_data from '../../config/activities.json';
import GridCell from './GridCell';

const TimeGrid = () => {
  const [clicked, setClicked] = React.useState("");
  const cellArray = generateCells(clicked, setClicked);

  return (
    <div className='time-grid'>
      {cellArray}
    </div>
  );
}

const generateCells = (clicked: string, setClicked: React.Dispatch<React.SetStateAction<string>>) => {
  const data: Activity[] = activities_data.activities;
  const cellArray: JSX.Element[] = [];

  const map = new Map();
  map.set(0, "monday");
  map.set(1, "tuesday");
  map.set(2, "wednesday");
  map.set(3, "thursday");
  map.set(4, "friday");

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 5; j++) {
      const activity = data.find(activity => activity.startTime == i + 8 && activity.day == map.get(j));
      const id = activity ? activity.id : `${i}${j}`;
      cellArray.push(<GridCell activity={activity} id={id} clicked={clicked} setClicked={setClicked} />)
    }
  }


  return cellArray;
}

export default TimeGrid;
