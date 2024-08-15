
import { randomBool, randomNumber } from '../../MiscFiles/RandomGenerator'
import { ModuleProps } from '../../ModuleView/ModuleView'
import './Tile.css'
import { useEffect, useState } from 'react'

function Tile(props: ModuleProps) {


    const [toggled, setToggled] = useState([randomBool(), randomBool(), randomBool(), randomBool(), randomBool(), randomBool()])
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

    useEffect(() => {
        softReset()
    }, [props.softReset[0]])
    useEffect(() => {
        hardReset()
    }, [props.hardReset[0]])

    const clicked = (item: number) => {
        var temp: boolean[] = []
        toggled.forEach((value) => {
            temp.push(value)
        })
        temp[item] = !temp[item]

        setToggled(temp)
        isDone(temp)
    }
    const tiles = numbers.map((num) => {
        return (<button key={props.moduleNumber + "tile" + num} className={`tile ${toggled[num] ? 'toggle' : ''}`} onClick={() => clicked(num)} >
            <div className={`innerCircle ${toggled[num] ? 'toggle' : ''}`} />
        </button>)
    })
    const isDone = (temp: boolean[]) => {
        var flag = true
        temp.forEach((value) => {
            if (!value) {
                flag = false
            }
        })
        props.isDone[1](flag)

    }
    const hardReset = () => {
        const temp: boolean[] = []
        toggled.forEach(() => {
            temp.push(randomBool())
        })
        setToggled(temp)
        isDone(temp)
    }
    const softReset = () => {
        const temp: boolean[] = []
        toggled.forEach((value) => {
            temp.push(value)
        })
        const r = randomNumber(0, 7)
        temp[r] = !temp[r]
        setToggled(temp)
        isDone(temp)
    }


    return (
        <>
            <div className='bg'>
                <div className='cont'>
                    {tiles}
                </div>
            </div>

        </>)
}
export default Tile