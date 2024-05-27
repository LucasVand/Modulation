import './Range.css'

import { useState } from 'react'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
    hardReset: boolean
    softReset: boolean

}


function Range(props: moduleProp) {
    const randomize = () => {
        const max = 20
        const rand = Math.round(0 + Math.random() * (max - 0));
        return rand
    }
    const ArrowDown = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
        </svg>
    )

    const ArrowUp = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
        </svg>
    )

    const [correctNum, setCorrectNum] = useState(randomize())
    const [displayNum, setDisplayNum] = useState(10)

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
        props.setIsDone(flag)

    }

    const hardReset = () => {
        var temp = randomize()
        setCorrectNum(temp)
        temp = randomize()
        setDisplayNum(temp)
    }
    const softReset = () => {
        var temp = displayNum + (Math.round(Math.random()) == 1 ? -1 : 1)
        setDisplayNum(temp)
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