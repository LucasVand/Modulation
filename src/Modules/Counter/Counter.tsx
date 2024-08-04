
import { useEffect, useState } from 'react'

import './Counter.css'
import { ModuleProps } from '../../ModuleView/ModuleView';
import { randomNumber } from '../../MiscFiles/RandomGenerator';


function Counter(props: ModuleProps) {

    const [selectedNum, setSelectedNum] = useState(randomNumber(0, 10))
    const [selctedTick, setSelectedTick] = useState([false, false, false, false, false, false, false, false, false, false])

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        softReset()
    }, [props.softReset[0]])
    useEffect(() => {
        hardReset()
    }, [props.hardReset[0]])

    const ticks = numbers.map((num) => {
        const w = 225
        const h = w * 1
        const cos = Math.cos(((Math.PI * 2) / numbers.length) * num) * w
        const sin = Math.sin(((Math.PI * 2) / numbers.length) * num) * h


        return (
            <button key={props.moduleNumber + "counter" + num} className={`counterTick ${selctedTick[num] ? 'toggle' : ''}`} style={{ transform: `translate(${cos - 50}%,${sin - 50}%)` }} onClick={() => click(num)}></button>
        )
    })

    const click = (num: number) => {
        const temp: boolean[] = []
        selctedTick.forEach((value) => {
            temp.push(value)
        })
        temp[num] = !temp[num]

        setSelectedTick(temp)
        isDone(temp)
    }
    const ticksDown = () => {
        var temp: number = 0
        selctedTick.forEach((value) => {
            temp += value ? 1 : 0
        })
        return temp
    }

    const isDone = (temp: boolean[]) => {
        var flag = true
        var count = 0
        temp.forEach((value) => {
            count += value ? 1 : 0
        })

        if (count != selectedNum) {
            flag = false
        }
        props.isDone[1](flag)
    }

    const hardReset = () => {
        const t = [false, false, false, false, false, false, false, false, false, false]
        setSelectedTick(t)
        setSelectedNum(randomNumber(0, 10))
        isDone(t)
    }
    const softReset = () => {
        const t: boolean[] = []
        selctedTick.forEach((value) => {
            t.push(value)
        })
        const rnd = Math.round(Math.random() * 9)

        t[rnd] = !t[rnd]
        setSelectedTick(t)
        isDone(t)
    }


    return (
        <>
            <div className='bg'>
                <div className={`centerCounterDisplay ${ticksDown() == selectedNum ? 'toggle' : ''}`}>
                    {selectedNum - ticksDown()}

                    {ticks}

                </div>
            </div>


        </>
    )
}

export default Counter