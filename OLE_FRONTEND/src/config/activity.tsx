export type Activity = {
  id: string
  ownerId: string
  type: string
  name: string
  day: string
  startTime: number
  endTime: number
  notes: string
}

export type ActivityArray = Activity[];
