import './LapTable.css'
import { LapTableSummary } from './LapTableSummary/LapTableSummary.tsx'
import { LapTableBody } from './LapTableBody/LapTableBody.tsx'
import { LapTableHeader } from './LapTableHeader/LapTableHeader.tsx'

export const TableLap = () => {
  const time = '00:00:00:01'

  const dataLap = [
    { lap: 1, time: '00:00:00:00' },
    { lap: 2, time: '00:00:00:00' },
    { lap: 3, time: '00:00:00:00' },
    { lap: 4, time: '00:00:00:00' },
    { lap: 5, time: '00:00:00:00' },
    { lap: 6, time: '00:00:00:00' },
    { lap: 7, time: '00:00:00:00' },
    { lap: 8, time: '00:00:00:00' },
    { lap: 9, time: '00:00:00:00' },
    { lap: 10, time: '00:00:00:00' },
  ]

  return (
    <table className="lap-table">
      <LapTableHeader />
      <LapTableBody dataLap={dataLap} />
      <LapTableSummary lap={11} time={time} />
    </table>
  )
}
