import { randomNumber } from '../../MiscFiles/RandomGenerator'
import { ModuleProps } from '../../ModuleView/ModuleView'
import './Shape.css'

import { useEffect, useState } from 'react'

function Shape(props: ModuleProps) {
    const Circle = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
        </svg>
    )
    const Cloud = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
        </svg>
    )
    const Shield = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-shield-fill" viewBox="0 0 16 16">
            <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
        </svg>
    )
    const Sun = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>
    )
    const Pentagon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pentagon-fill" viewBox="0 0 16 16">
            <path d="M7.685.256a.5.5 0 0 1 .63 0l7.421 6.03a.5.5 0 0 1 .162.538l-2.788 8.827a.5.5 0 0 1-.476.349H3.366a.5.5 0 0 1-.476-.35L.102 6.825a.5.5 0 0 1 .162-.538l7.42-6.03Z" />
        </svg>
    )
    const Airplane = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-airplane-fill" viewBox="0 0 16 16">
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
        </svg>
    )


    const icons = [<Pentagon />, <Sun />, <Shield />, <Cloud />, <Circle />, <Airplane />]
    const numbers = [0, 1, 2]
    const [DisplayShape, setDisplayShape] = useState([randomNumber(0, 5), randomNumber(0, 5), randomNumber(0, 5)])
    const [correctShape, setCorrectShape] = useState([randomNumber(0, 5), randomNumber(0, 5), randomNumber(0, 5)])

    useEffect(() => {
        softReset()
    }, [props.softReset[0]])
    useEffect(() => {
        hardReset()
    }, [props.hardReset[0]])

    const shapeB = numbers.map((num) => {
        return (
            <button key={props.moduleNumber + "shape" + num} className={`shapeButton ${DisplayShape[num] == correctShape[num] ? 'toggle' : ''}`} onClick={() => {
                click(num)

            }}>
                {icons[DisplayShape[num]]}
            </button>
        )
    })

    const click = (num: number) => {
        const temp: number[] = []
        DisplayShape.forEach((value) => {
            temp.push(value)
        });
        temp[num] += 1

        if (temp[num] > icons.length - 1) {
            temp[num] = 0
        }

        setDisplayShape(temp)
        isDone(temp)
    }

    const isDone = (temp: number[]) => {

        var flag = true
        correctShape.forEach((value, index) => {
            if (value != temp[index]) {
                flag = false
            }
        })
        props.isDone[1](flag)
    }

    const hardReset = () => {
        var temp: number[] = []
        correctShape.forEach(() => {
            temp.push(randomNumber(0, 5))
        })
        setCorrectShape(temp);

        temp = []
        DisplayShape.forEach(() => {
            temp.push(randomNumber(0, 5))
        })
        setDisplayShape(temp);
        isDone(temp)
    }
    const softReset = () => {
        var temp: number[] = []
        DisplayShape.forEach((value) => {
            temp.push(value)
        })

        const rand = Math.round(0 + Math.random() * (2));
        temp[rand] = randomNumber(0, 5)
        setDisplayShape(temp);
        isDone(temp)
    }


    return (
        <>
            <div className="bg">
                {shapeB}
            </div>

        </>
    )
}

export default Shape