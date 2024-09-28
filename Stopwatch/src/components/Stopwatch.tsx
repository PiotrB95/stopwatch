import { useState } from 'react'
import { Timer } from './Timer'
import '../styles/Stopwatch.css'
import { StopwatchControl } from './StopwatchControl/StopwatchControl'
import { TableLap } from './LapTable/LapTable'
import { Summary } from './Summary'

export const Stopwatch = () => {
  const [mainCounter, setMainCounter] = useState(0)
  const [lapCounter, setLapCounter] = useState(0)
  const [mainIntervalHandle, setMainIntervalHandle] = useState<number | null>(null);
  const [lapIntervalHandle, setLapIntervalHandle] = useState<number | null>(null);
  const [stopwatchRun, setStopwatchRun] = useState<boolean>(true);
  const [lapArray, setLapArray] = useState<number[]>([]);
  const [hideClocks, setHideClocks] = useState<boolean>(false);

  const handleStart = () => {
    if (mainIntervalHandle === null) {
      const interval = setInterval(() => {
        setMainCounter(prevCounter => prevCounter + 1);
      }, 100);
  
      setMainIntervalHandle(interval);
    }

    if (lapIntervalHandle === null) {
      const interval = setInterval(() => {
        setLapCounter(prevCounter => prevCounter + 1);
      }, 100);
  
      setLapIntervalHandle(interval);
    }
    setLapArray([]);
    setMainCounter(0);
    setLapCounter(0);
    setHideClocks(false);
    setStopwatchRun(true);
    return;
  }

  const handleReset = () => {
    setMainCounter(0);
    setLapCounter(0);
    setLapArray([]);
  }

  const handleLap = () => {
    if(lapIntervalHandle === null) return;
    setLapArray([...lapArray, lapCounter]);
    setStopwatchRun(true);
    setLapCounter(0);
  }

  const handleStop = () => {
    if (mainIntervalHandle !== null) {
      clearInterval(mainIntervalHandle);
      setMainIntervalHandle(null);
    }
    if (lapIntervalHandle !== null) {
      clearInterval(lapIntervalHandle);
      setLapIntervalHandle(null);
    }
    setStopwatchRun(false);
    setHideClocks(true);
  }

  return (
    <div className="stopwatch">
      { !hideClocks && 
        <div className="clocks">
          <Timer
            counter={mainCounter}
            cssClass="mainTimer"
          />
          <Timer
            counter={lapCounter}
            cssClass="lapTimer"
          />
        </div>
      }
      <StopwatchControl 
        handleStart={handleStart}
        handleReset={handleReset}
        handleStop={handleStop}
        handleLap={handleLap}
      />

      {stopwatchRun
      ?
        lapArray.length !== 0 && <TableLap lapArray={lapArray} />
      :
        <Summary lapArray={lapArray} mainCounter={mainCounter}/>
      }
      
    </div>
  )
}

