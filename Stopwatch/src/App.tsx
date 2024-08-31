import './App.css'
import { Stopwatch } from './components/Stopwatch'
import { TableLap } from './components/LapTable/LapTable.tsx'

import { StopwatchControl } from './components/StopwatchControl/StopwatchControl.tsx'

export const App = () => {
  return (
    <>
      <Stopwatch />
      <StopwatchControl />
      <TableLap />
    </>
  )
}
