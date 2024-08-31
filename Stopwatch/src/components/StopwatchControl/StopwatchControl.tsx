import { Button } from '../Button/Button.tsx'
import './StopwatchControl.css'

export const StopwatchControl = () => {
  return (
    <div className="stopwatch-control">
      <Button label={'Start'} clasName={'big start'} />
      <Button label={'Reset'} clasName={'big reset'} />
      <Button label={'Stop'} clasName={'big stop'} />
    </div>
  )
}
