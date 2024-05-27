import { useState } from 'react'
import { Timer } from './Timer'
import '../styles/Stopwatch.css'

export const Stopwatch = () => {
  const [mainCounter, setMainCounter] = useState(0)
  const [lapCounter, setLapCounter] = useState(0)

  return (
    <div className="stopwatch">
      <Timer
        counter={mainCounter}
        setCounter={setMainCounter}
        cssClass="mainTimer"
      />
      <Timer
        counter={lapCounter}
        setCounter={setLapCounter}
        cssClass="lapTimer"
      />
    </div>
  )
}
