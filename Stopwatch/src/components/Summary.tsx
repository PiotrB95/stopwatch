import { FormatTime } from "./FormatTime";

interface SummaryInterface {
    mainCounter: number;
    lapArray: number[]
}

export const Summary = ( {lapArray, mainCounter}:SummaryInterface ) => {
    const totalTime = FormatTime(mainCounter);
    const avgTime = lapArray.length !== 0 ? FormatTime(Math.round(mainCounter/lapArray.length)) : 'No data';
    const bestLap = lapArray.length !== 0 ? FormatTime(lapArray.sort(( a, b) => a - b)[0]) : 'No data';
    const worstLap = lapArray.length !== 0 ? FormatTime(lapArray.sort(( a, b) => b - a)[0]) : 'No data';
    const totalLaps = lapArray.length !== 0 ? lapArray.length : 'No data';

    return <>
        <table className="lap-table">
            <thead>
            <tr>
                <th colSpan={2}>Summary</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Total Time</td>
                    <td>{totalTime}</td>
                </tr>
                <tr>
                    <td>Avarage Lap Time</td>
                    <td>{avgTime}</td>
                </tr>
                <tr>
                    <td>Best Lap Time</td>
                    <td>{bestLap}</td>
                </tr>
                <tr>
                    <td>Worst Lap Time</td>
                    <td>{worstLap}</td>
                </tr>
                <tr>
                    <td>Total Laps</td>
                    <td>{totalLaps}</td>
                </tr>
            </tbody>
        </table>
    </>
}