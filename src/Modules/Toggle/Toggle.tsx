import { randomBool, randomNumber } from '../../MiscFiles/RandomGenerator'
import { ModuleProps } from '../../ModuleView/ModuleView'
import './Toggle.css'

import { useEffect, useState } from 'react'

function Toggle(props: ModuleProps) {
    useEffect(() => {
        softReset()
    }, [props.softReset[0]])
    useEffect(() => {
        hardReset()
    }, [props.hardReset[0]])

    const toggleNums = [0, 1, 2, 3]
    const [toggled, setToggled] = useState([randomBool(), randomBool(), randomBool(), randomBool()])

    const toggles = toggleNums.map((num) => {
        return (
            <div key={props.moduleNumber + "toggle" + num} className={`capsule ${toggled[num] ? 'toggled' : ''}`} >
                <button className={`circle ${toggled[num] ? 'toggled' : ''}`} onClick={() => click(num)}></button>
            </div >
        )
    })
    const click = (num: number) => {
        const temp = [toggled[0], toggled[1], toggled[2], toggled[3]]
        temp[num] = !toggled[num]
        setToggled(temp)
        isDone(temp)
    }
    const isDone = (temp: boolean[]) => {
        var flag = true
        temp.forEach((value) => {
            if (!value) {
                flag = false
            }
        })
        props.isDone[1](flag)

    }

    function hardReset() {
        const temp = [randomBool(), randomBool(), randomBool(), randomBool()]
        setToggled(temp)
        isDone(temp)
    }

    const softReset = () => {
        const rnd = randomNumber(0, 3)
        const temp: boolean[] = []
        toggled.forEach((value) => {
            temp.push(value)
        })
        temp[rnd] = !temp[rnd]
        setToggled(temp)
        isDone(temp)
    }


    return (
        <>
            <div className="bg">{toggles}</div>
        </>
    )
}



export default Toggle