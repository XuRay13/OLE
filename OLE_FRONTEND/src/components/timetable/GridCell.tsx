import React from 'react';
import { Activity } from '../../config/activity';

type Props = {
  activity?: Activity
}

const GridCell = (props: Props) => {
  const [clicked, setClicked] = React.useState(false);
  const map = new Map();
  map.set("lesson", "linear-gradient(to right, rgb(0, 120, 56), rgb(0, 162, 116))");
  map.set("block", "linear-gradient(to right, rgb(150, 0, 0), rgb(130, 0, 0))");
  map.set("special", "linear-gradient(to right, rgb(0, 16, 120), rgb(0, 73, 162))");

  return props.activity ?
    (
      <div className='grid-cell' data-tippy-content={props.activity.notes} id={props.activity.id}
        style={{ backgroundImage: map.get(props.activity.type) }}>
        <div className='grid-cell-name'>
          {props.activity.name !== "Ole" ?
            <p>{props.activity.name}</p> :
            null
          }
        </div>
        <div className='grid-cell-info'>

        </div>
      </div>
    ) :
    (
      <div className='grid-cell' />
    )
}

export default GridCell;
