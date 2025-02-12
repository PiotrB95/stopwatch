import './../styles/Timer.css'
import { FormatTime } from './FormatTime'

interface TimerProps {
  counter: number
  cssClass: string
}

export const Timer = ({ counter, cssClass}: TimerProps) => {
  return (
      <div className={`${cssClass}`}>
        {FormatTime(counter)}
      </div>
  )
}
