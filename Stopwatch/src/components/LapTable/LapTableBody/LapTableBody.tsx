import {LapTableRow} from "../LapTableRow/LapTableRow.tsx";

interface Props {
    dataLap: {
        lap: number;
        time: string
    }[]
}

export const LapTableBody = (props: Props) => {
    return (
        <tbody>
        {props.dataLap.map((i) => (
            <LapTableRow lap={i.lap} time={i.time}/>
        ))}
        </tbody>
    )
}