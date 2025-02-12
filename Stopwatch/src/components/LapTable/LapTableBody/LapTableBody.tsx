import {LapTableRow} from "../LapTableRow/LapTableRow.tsx";


interface SingleData {
    lap: number
    time: string
}
interface Props {
   dataLap: SingleData[]
}

export const LapTableBody = (props: Props) => {
    return (
        <tbody>
        {props.dataLap.map((i) => (
            <LapTableRow key={i.lap} lap={i.lap} time={i.time}/>
        ))}
        </tbody>
    )
}