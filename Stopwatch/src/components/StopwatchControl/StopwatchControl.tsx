import { Button } from '../Button/Button.tsx'
import './StopwatchControl.css'

interface StopwatchControlProps {
  handleStart: () => void;
  handleReset: () => void;
  handleLap: () => void;
  handleStop: () => void;
  
}
export const StopwatchControl = ({handleStart, handleReset, handleLap, handleStop}: StopwatchControlProps) => {
  return (
    <div className="stopwatch-control">
      <Button label={'Start'} clasName={'big start'} onClick={handleStart}/>
      <Button label={'Reset'} clasName={'big reset'} onClick={handleReset}/>
      <Button label={'Lap'} clasName={'big lap'} onClick={handleLap}/>
      <Button label={'Stop'} clasName={'big stop'} onClick={handleStop}/>
    </div>
  )
}
