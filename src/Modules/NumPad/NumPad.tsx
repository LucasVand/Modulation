
import { ModuleProps } from '../../ModuleView/ModuleView'
import './NumPad.css'
import { useEffect, useState } from 'react'

function NumPad(props: ModuleProps) {
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

    useEffect(() => {
        softReset()
    }, [props.softReset[0]])
    useEffect(() => {
        hardReset()
    }, [props.hardReset[0]])

    const tiles = numbers.map((item) => {
        return (
            <button key={props.moduleNumber + "numpad" + item} className={`key ${isDown[item] ? 'toggle' : ''}`} onClick={() => click(item)}>{item}</button>
        )
    })



    const click = (num: number) => {
        const temp2 = []
        isNumDone.forEach((value) => {
            temp2.push(value)
        })
        const temp = []
        isDown.forEach((value) => {
            temp.push(value)
        })
        for (let i = 0; i < 6; i++) {
            if (num == screenNum[i]) {

                temp[num] = true


                temp2[i] = true

            }
        }
        setIsDown(temp)
        setIsNumDone(temp2)
        isDone(temp2)

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

    const hardReset = () => {
        const t = [false, false, false, false, false, false]
        const j = [false, false, false, false, false, false, false, false, false]
        const s: number[] = [randomize(), randomize(), randomize(), randomize(), randomize(), randomize()]
        setIsDown(j)
        setIsNumDone(t)
        setScreenNum(s)
        isDone(t)
    }
    const softReset = () => {
        const temp: number[] = []
        const temp2: boolean[] = []
        const temp3: boolean[] = []
        screenNum.forEach((value) => {
            temp.push(value)
        })
        isNumDone.forEach((value) => {
            temp2.push(value)
        })
        isDown.forEach((value) => {
            temp3.push(value)
        })

        const rand = Math.round(Math.random() * 5);

        const v = temp[rand]
        temp3[v] = false
        temp[rand] = randomize()
        temp2[rand] = false

        setIsDown(temp3)
        setScreenNum(temp)
        setIsNumDone(temp2)

        isDone(temp2)
    }


    const screenDisplay = screenNum.map((num, index) => {
        return (
            <div key={props.moduleNumber + "numpadScreen" + index} className={`screenText ${isNumDone[index] ? 'toggle' : ''}`}>{num}</div>
        )
    })


    return (
        <>
            <div className='bg'>
                <div className={`NumPadScreen ${isNumDone.find((num) => num == false) == undefined ? 'toggle' : ''}`}>{screenDisplay}</div>

                <div className='pad'>
                    {tiles}
                </div>
            </div>

        </>
    )
}

export default NumPad