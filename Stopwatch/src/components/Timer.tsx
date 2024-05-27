import { SetStateAction, useEffect } from 'react'
import './../styles/Timer.css'

interface Props {
  counter: number
  setCounter: React.Dispatch<SetStateAction<number>>
  cssClass: string
}

export const Timer = ({ counter, setCounter, cssClass }: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [setCounter])

  const formatTime = (counter: number) => {
    const milliseconds = (counter % 10).toString().padStart(1, '0')
    const seconds = Math.floor((counter / 10) % 60)
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((counter / 600) % 60)
      .toString()
      .padStart(2, '0')
    const hours = Math.floor(counter / 36000)
      .toString()
      .padStart(2, '0')

    return (
      <>
        {hours}:{minutes}:{seconds}:{milliseconds}
      </>
    )
  }

  return (
    <>
      <div className={`${cssClass}`}>{formatTime(counter)}</div>
    </>
  )
}
