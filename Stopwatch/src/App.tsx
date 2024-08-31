import './App.css'
import { Stopwatch } from './components/Stopwatch'

import { StopwatchControl } from './components/StopwatchControl/StopwatchControl.tsx'

export const App = () => {
  return (
    <>
      <Stopwatch />
      <StopwatchControl />
    </>
  )
}
