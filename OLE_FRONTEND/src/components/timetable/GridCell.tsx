import React from 'react';
import { Activity } from '../../config/activity';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ActivitySelection from './ActivitySelection';

type Props = {
  activity?: Activity
  clicked: string
  id: string
  setClicked: React.Dispatch<React.SetStateAction<string>>
}

const GridCell = (props: Props) => {
  const map = new Map();
  map.set("lesson", "linear-gradient(to right, rgb(0, 120, 56), rgb(0, 162, 116))");
  map.set("block", "linear-gradient(to right, rgb(150, 0, 0), rgb(130, 0, 0))");
  map.set("special", "linear-gradient(to right, rgb(0, 16, 120), rgb(0, 73, 162))");

  const handleClick = () => {
    if (props.clicked === props.id) {
      props.setClicked("");
    }
    else {
      props.setClicked(props.id);
    }
  }

  return props.activity ?
    (
      <Tippy
        content={
          <p>{props.activity.notes !== "" ? props.activity.notes : null}</p>
        }
      >
        <div className='grid-cell-activity' id={props.activity.id}
          style={{ backgroundImage: map.get(props.activity.type) }}>
          <div className='grid-cell-name'>
            {props.activity.name !== "Ole" ?
              <p>{props.activity.name}</p> :
              null
            }
          </div>
        </div>
      </Tippy>
    ) :
    (
      <div className='grid-cell-blank' onClick={() => handleClick()}>
        {
          props.clicked === props.id ?
            <ActivitySelection />
            :
            null
        }
      </div>
    )
}

export default GridCell;
