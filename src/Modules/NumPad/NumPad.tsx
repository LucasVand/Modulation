
import './NumPad.css'
import { useState } from 'react'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>

}

function NumPad(props: moduleProp) {
    const randomize = () => {
        const min = 0
        const max = 8
        const rand = Math.round(min + Math.random() * (max - min));
        return rand
    }


    const [isDown, setIsDown] = useState([false, false, false, false, false, false, false, false, false])
    const [isNumDone, setIsNumDone] = useState([false, false, false, false, false, false])
    const [screenNum, setScreenNum] = useState([randomize(), randomize(), randomize(), randomize(), randomize(), randomize()])

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const tiles = numbers.map((item: number) => {
        return (
            <button className={`key ${isDown[item] ? 'toggle' : ''}`} onClick={() => click(item)}>{item}</button>
        )
    })

    const click = (num: number) => {
        const temp2 = Array(6)
        for (let l = 0; l < 6; l++) {
            temp2[l] = isNumDone[l]
        }
        for (let i = 0; i < 6; i++) {
            if (num == screenNum[i]) {
                const temp = Array(9)
                for (let l = 0; l < 9; l++) {
                    temp[l] = isDown[l]
                }

                temp[num] = true
                setIsDown(temp)

                temp2[i] = true
                setIsNumDone(temp2)
            }
        }
        isDone(temp2)
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

    return (
        <>
            <div className='bg'>
                <div className={`screen ${isNumDone.find((num) => num == false) == undefined ? 'toggle' : ''}`}>{screenNum.map((num, index) => {
                    return (
                        <p className={`screenText ${isNumDone[index] ? 'toggle' : ''}`}>{num}</p>
                    )
                })}</div>

                <div className='pad'>
                    {tiles}
                </div>
            </div>

        </>
    )
}

export default NumPad