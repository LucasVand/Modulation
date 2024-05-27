
import { useState } from 'react'

import './Counter.css'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
    hardReset: boolean
    softReset: boolean

}

function Counter(props: moduleProp) {

    const randomize = () => {
        const max = 10
        const rand = Math.round(0 + Math.random() * (max - 0));
        return rand
    }

    const [selectedNum, setSelectedNum] = useState(randomize())
    const [selctedTick, setSelectedTick] = useState([false, false, false, false, false, false, false, false, false, false])

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const ticks = numbers.map((num) => {
        const w = 225
        const h = w * 1
        const cos = Math.cos(((Math.PI * 2) / numbers.length) * num) * w
        const sin = Math.sin(((Math.PI * 2) / numbers.length) * num) * h


        return (
            <button className={`counterTick ${selctedTick[num] ? 'toggle' : ''}`} style={{ transform: `translate(${cos - 50}%,${sin - 50}%)` }} onClick={() => click(num)}></button>
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
        props.setIsDone(flag)
    }

    const hardReset = () => {
        const t = [false, false, false, false, false, false, false, false, false, false]
        setSelectedTick(t)
        setSelectedNum(randomize())
    }
    const softReset = () => {
        const t = [false, false, false, false, false, false, false, false, false, false]
        const rnd = Math.round(Math.random() * 9)

        t[rnd] = !t[rnd]
        setSelectedTick(t)
    }

    setTimeout(() => {
        if (props.softReset) {
            softReset()
            props.softReset = false
        }

        if (props.hardReset) {
            hardReset()
            props.hardReset = false
        }
    }, 0.5);
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