import './Toggle.css'

import React, { useEffect, useState } from 'react'

interface toggleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
}
function Toggle(props: toggleProp) {
    const randomize = () => {
        const min = 0
        const max = 3
        const rand = Math.round(min + Math.random() * (max - min));
        return rand
    }

    const toggleNums = [0, 1, 2, 3]
    const [toggled, setToggled] = useState([false, false, false, false])

    const toggles = toggleNums.map((num) => {
        return (
            <div className={`capsule ${toggled[num] ? 'toggled' : ''}`} >
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
        props.setIsDone(flag)

    }

    function hardReset() {
        const temp = [false, false, false, false]
        setToggled(temp)
    }


    const softReset = () => {
        const rnd = randomize()
        const temp: boolean[] = []
        toggled.forEach((value) => {
            temp.push(value)
        })
        temp[rnd] = !temp[rnd]
        setToggled(temp)
    }


    return (
        <>
            <div className="bg">{toggles}</div>
        </>
    )
}



export default Toggle