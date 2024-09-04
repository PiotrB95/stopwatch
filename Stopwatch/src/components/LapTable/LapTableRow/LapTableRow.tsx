type SingleLapProps = {
    lap: number;
    time: string;
}

export const LapTableRow = ({lap, time}:SingleLapProps) => {
    return (
        <tr>
            <td>{lap}</td>
            <td>{time}</td>
        </tr>
    )
}