import React from 'react'

type Props = {
  day: string
}

const DayCard = (props: Props) => {
  return (
    <div className="day-card">
      <h2>{props.day}</h2>
    </div>
  )
}

export default DayCard