import { SetStateAction, useState } from 'react'
import Toggle from '../Modules/Toggle/Toggle'
import Tile from '../Modules/Tile/Tile'
import Shape from '../Modules/Shape/Shape'
import Rotation from '../Modules/Rotation/Rotation'
import Range from '../Modules/Range/Range'
import NumPad from '../Modules/NumPad/NumPad'
import Grid from '../Modules/Grid/Grid'
import Counter from '../Modules/Counter/Counter'
import Bar from '../Modules/Bar/Bar'
import '../App.css'



interface moduleView {
    isDone: boolean
    setIsDone: React.Dispatch<SetStateAction<boolean>>
    hardReset: boolean
    softReset: boolean
}

function ModuleView(props: moduleView) {
    const randomize = () => {
        const min = 0
        const max = 9
        const rand = Math.round(min + Math.random() * (max - min));
        return rand
    }
    const Blank = () => {
        return (
            <div className='bg'></div>
        )
    }

    const modules = [
        <Blank></Blank>,
        <Toggle isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Toggle>,
        <Tile isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Tile>,
        <Shape isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Shape>,
        <Rotation isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Rotation>,
        <Range isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Range>,
        <NumPad isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></NumPad>,
        <Grid isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Grid>,
        <Counter isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Counter>,
        <Bar isDone={props.isDone} setIsDone={props.setIsDone} hardReset={props.hardReset} softReset={props.softReset}></Bar>

    ]
    const [moduleNum, setModuleNum] = useState(randomize())


    return (
        <>
            {
                modules[moduleNum]
            }
        </>
    )
}

export default ModuleView