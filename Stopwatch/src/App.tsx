import './App.css'
import { Stopwatch } from './components/Stopwatch'
import {TableLap} from "./components/LapTable/LapTable.tsx";

export const App = () => {
  return <>
    <Stopwatch/>
    <TableLap/>
  </>
}
