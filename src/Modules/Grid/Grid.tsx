import { useState } from 'react'
import './Grid.css'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
    hardReset: boolean
    softReset: boolean

}

function Grid(props: moduleProp) {
    const rndBool = () => {
        return Math.round(Math.random()) == 1 ? true : false
    }
    const Rec = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-app" viewBox="0 0 16 16" style={{ transform: 'translate(0,4%)', fontWeight: '2em' }}>
                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" />
            </svg>
        )
    }
    const [down, setDown] = useState([false, false, false, false, false, false, false, false, false])
    const [correct, setCorrect] = useState([rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool()])
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const buttons = numbers.map((num: number) => {
        return (
            <button className={`gridButton ${down[num] ? 'toggle' : ''}`} onClick={() => click(num)}>
                <Rec></Rec>
            </button>
        )
    })

    const ticks = numbers.map((num) => {
        return (
            <div className={`gridTick ${correct[num] ? 'toggle' : ''}`}></div>
        )
    })
    const click = (num: number) => {
        var temp: boolean[] = []
        down.forEach((value) => {
            temp.push(value)
        })

        temp[num] = !temp[num]
        setDown(temp)
        propsIsDone(temp)
    }
    const isDone = () => {
        var flag = true
        down.forEach((value, index) => {
            if (value != correct[index]) {
                flag = false
            }
        })
        return flag
    }
    const propsIsDone = (temp: boolean[]) => {
        var flag = true
        correct.forEach((value, index) => {
            if (value != temp[index]) {
                flag = false
            }
        })
        props.setIsDone(flag)
    }

    const hardReset = () => {
        const t = [false, false, false, false, false, false, false, false, false]
        const d = [rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool(), rndBool()]
        setCorrect(d)
        setDown(t)
    }
    const softReset = () => {
        const rnd = Math.round(Math.random() * 8)
        const temp: boolean[] = []

        down.map((value, index) => {
            temp.push(value)
        })
        temp[rnd] = !temp[rnd]
        setDown(temp)
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
            <div className="bg">

                <div className={`gridDisplayCont ${isDone() ? 'toggle' : ''}`}>
                    {ticks}
                </div>

                <div className="gridButtonCont">
                    {buttons}
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Grid