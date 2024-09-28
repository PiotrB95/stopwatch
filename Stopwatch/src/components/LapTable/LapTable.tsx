import './LapTable.css'
import { LapTableBody } from './LapTableBody/LapTableBody.tsx'
import { LapTableHeader } from './LapTableHeader/LapTableHeader.tsx'
import { FormatTime } from '../FormatTime.tsx'

interface TableLapProps {
  lapArray: number[]
}

export const TableLap = ({lapArray}: TableLapProps) => {
  const dataLap = lapArray.map((el, index) => ({lap: index + 1, time: FormatTime(el)}))

  return (
    <table className="lap-table">
      <LapTableHeader />
      <LapTableBody dataLap={dataLap} />
    </table>
  )
}
