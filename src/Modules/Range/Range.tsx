import { randomNumber } from '../../MiscFiles/RandomGenerator';
import { ModuleProps } from '../../ModuleView/ModuleView';
import './Range.css'

import { useEffect, useState } from 'react'



function Range(props: ModuleProps) {

    const ArrowDown = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
        </svg>
    )

    const ArrowUp = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
        </svg>
    )

    const [correctNum, setCorrectNum] = useState(randomNumber(0, 20))
    const [displayNum, setDisplayNum] = useState(10)

    useEffect(() => {
        softReset()
    }, [props.softReset[0]])
    useEffect(() => {
        hardReset()
    }, [props.hardReset[0]])

    const click = (add: number) => {

        const newNum = displayNum + add

        setDisplayNum(newNum)

        isDone(newNum)
    }

    const isDone = (temp: number) => {
        var flag = false
        if (temp == correctNum) {
            flag = true
        }
        props.isDone[1](flag)

    }

    const hardReset = () => {
        var temp = randomNumber(0, 20)
        setCorrectNum(temp)
        temp = randomNumber(0, 20)
        setDisplayNum(temp)
        isDone(temp)
    }
    const softReset = () => {
        var temp = displayNum + (Math.round(Math.random()) == 1 ? -1 : 1)
        setDisplayNum(temp)
        isDone(temp)
    }
    return (
        <>
            <div className='bg'>
                <button className={`rangeButton ${correctNum >= displayNum ? 'toggle' : ''}`} onClick={() => click(1)}>
                    <ArrowUp></ArrowUp>
                </button>

                <div className={`centerRangeDisplay ${correctNum == displayNum ? 'toggle' : ''}`}>{displayNum}</div>

                <button className={`rangeButton ${correctNum <= displayNum ? 'toggle' : ''}`} onClick={() => click(-1)}>
                    <ArrowDown></ArrowDown>
                </button>
            </div>
        </>
    )
}
export default Range