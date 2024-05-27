import './Bar.css'

import { useState } from 'react'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
    hardReset: boolean
    softReset: boolean

}
interface barProp {
    setBothDone: React.Dispatch<React.SetStateAction<boolean[]>>
    bothDone: boolean[]
    func: Function
    index: number
    hardReset: boolean
    softReset: boolean
}


function BarSection(props: barProp) {
    const randomize = () => {
        const max = 10
        const rand = Math.round(0 + Math.random() * (max - 0));
        return rand
    }
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [correct, setCorrect] = useState(randomize())
    const [tickOn, setTickOn] = useState([false, false, false, false, false, false, false, false, false, false, false])
    const ticks = numbers.map((num) => {

        return (
            <div className={`barTick ${tickOn[num] ? 'toggle' : ''} ${correct == num ? 'selected' : ''}`}></div>
        )
    })
    const click = () => {
        const temp: boolean[] = []
        tickOn.forEach((value) => {
            temp.push(value)
        })

        var index = temp.findIndex((v) => v == false)
        if (index == -1) {
            temp.forEach((_, index) => {
                temp[index] = false
            })
        }
        else {
            temp[index] = true
        }

        setTickOn(temp)
        isDone(temp)

    }
    const isDone = (temp: boolean[]) => {
        var index = temp.findIndex((v) => v == false) - 1
        var flag = true
        if (index != correct) {
            flag = false
        }
        const arr = []
        props.bothDone.forEach((value) => {
            arr.push(value)
        })
        arr[props.index] = flag
        props.setBothDone(arr)
        props.func(arr)
    }
    const hardReset = () => {
        const t = [false, false, false, false, false, false, false, false, false, false, false]
        setTickOn(t)
        setCorrect(randomize())
    }
    const softReset = () => {
        const t = [false, false, false, false, false, false, false, false, false, false, false]
        setTickOn(t)
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
        <div className='barCont'>
            <div className={`tickCont ${correct + 1 == tickOn.findIndex((v) => v == false) ? 'toggle' : ''}`}>{ticks}</div>
            <button className={`barButton ${correct + 1 == tickOn.findIndex((v) => v == false) ? 'toggle' : ''}`} onClick={() => click()}>+</button>
        </div>
    )

}

function Bar(props: moduleProp) {
    const [bothDone, setBothDone] = useState([false, false])
    const hardR = [false, false]
    const softR = [false, false]

    const isDoneFunc = (temp: boolean[]) => {
        var flag = true
        const arrT: boolean[] = []
        temp.forEach((value) => {
            arrT.push(value)
        })
        const index = arrT.findIndex((v) => v == false)
        flag = index == -1 ? true : false
        props.setIsDone(flag)
    }

    setTimeout(() => {
        setTimeout(() => {
            if (props.softReset) {
                const r = Math.round(Math.random())
                softR[r] = true
                props.softReset = false
            }

            if (props.hardReset) {
                const r = Math.round(Math.random())
                hardR[r] = true
                props.hardReset = false
            }
        }, 0.5);
    }, 0.5)



    return (
        <>
            <div className='bg'>
                <div className='barSeperation'>
                    <BarSection index={0} func={isDoneFunc} bothDone={bothDone} setBothDone={setBothDone} softReset={softR[0]} hardReset={hardR[0]}></BarSection>
                    <BarSection index={1} func={isDoneFunc} bothDone={bothDone} setBothDone={setBothDone} softReset={softR[1]} hardReset={hardR[1]}></BarSection>
                </div>
            </div>
        </>
    )
}



export default Bar