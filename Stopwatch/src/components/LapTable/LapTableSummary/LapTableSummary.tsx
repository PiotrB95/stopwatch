export const LapTableSummary = ({ time }: { time: string; lap: number }) => {
  return (
    <tfoot>
      <tr>
        <td>Podsumowanie</td>
        <td>{time}</td>
      </tr>
    </tfoot>
  )
}
