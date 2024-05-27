import './Rotation.css'


import { useState } from 'react'
interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>

}

function Rotation(props: moduleProp) {
    const RotationArrow = () => {
        return (
            <svg fontWeight='bold' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
        )
    }
    const randomize = () => {
        const min = 0
        const max = 9
        const rand = Math.round(min + Math.random() * (max - min));
        return rand
    }


    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [correctTick, setCorrectTick] = useState(randomize())
    const [selectedTick, setSelectedTick] = useState(0)

    const ticks = numbers.map((num) => {
        const count = num + 1
        const w = 200
        const h = w * 1.7
        const cos = Math.cos(((Math.PI * 2) / numbers.length) * num) * w
        const sin = Math.sin(((Math.PI * 2) / numbers.length) * num) * h

        const rotate = 360 / (numbers.length) * num
        return (
            <div className={`tick ${num == correctTick ? 'toggle' : ''}`} style={{ transform: `translate(${cos - 50}%,${sin - 50}%) rotate(${rotate}deg)` }}></div>
        )
    })





    const Rotator = () => {
        const w = 288
        const h = w
        const cos = Math.cos(((Math.PI * 2) / numbers.length) * selectedTick) * w - 50
        const sin = Math.sin(((Math.PI * 2) / numbers.length) * selectedTick) * h - 50
        return (
            <div className={`rotator ${selectedTick == correctTick ? 'toggle' : ''} `} style={{
                transform: `translate(${cos}%,${sin}%)`
            }}></div>
        )
    }

    const click = () => {
        var temp = selectedTick + 1
        if (temp > numbers.length) {
            temp = 0
        }
        setSelectedTick(temp)
        isDone(temp)
    }
    const isDone = (temp: number) => {
        var flag = true
        if (temp != correctTick) {
            flag = false
        }
        props.setIsDone(flag)
    }
    return (
        <>
            <div className='bg'>
                <div className='rotationRing'>

                    {ticks}
                    <Rotator></Rotator>

                </div>

                <div className={`rotationButton ${selectedTick == correctTick ? 'toggle' : ''}`} onClick={() => click()}>
                    <RotationArrow></RotationArrow>
                </div>

            </div>
        </>
    )
}
export default Rotation