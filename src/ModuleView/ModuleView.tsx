import { useState } from 'react'
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



interface ModuleView {
    isDone: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    hardReset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    softReset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    moduleNumber: number
}

function ModuleView(props: ModuleView) {
    const randomize = () => {
        const min = 1
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
        <Toggle isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Toggle>,
        <Tile isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Tile>,
        <Shape isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Shape>,
        <Rotation isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Rotation>,
        <Range isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Range>,
        <NumPad isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></NumPad>,
        <Grid isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Grid>,
        <Counter isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Counter>,
        <Bar isDone={props.isDone} hardReset={props.hardReset} softReset={props.softReset} moduleNumber={props.moduleNumber}></Bar>
    ]
    const [moduleNum, _] = useState(randomize())


    return (
        <>
            {
                modules[moduleNum]

            }
        </>
    )
}

export interface ModuleProps {
    isDone: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    hardReset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    softReset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    moduleNumber: number
}

export default ModuleView