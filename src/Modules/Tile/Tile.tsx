
import './Tile.css'
import { useState } from 'react'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>
    hardReset: boolean
    softReset: boolean

}

function Tile(props: moduleProp) {

    const randomize = () => {
        const min = 0
        const max = 7
        const rand = Math.round(min + Math.random() * (max - min));
        return rand
    }

    const [toggled, setToggled] = useState([false, false, false, false, false, false])
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

    const clicked = (item: number) => {
        var temp: boolean[] = []
        toggled.forEach((value) => {
            temp.push(value)
        })
        temp[item] = !temp[item]

        setToggled(temp)
        isDone(temp)
    }
    const tiles = numbers.map((num) => {
        return (<button className={`tile ${toggled[num] ? 'toggle' : ''}`} onClick={() => clicked(num)} >
            <div className={`innerCircle ${toggled[num] ? 'toggle' : ''}`} />
        </button>)
    })
    const isDone = (temp: boolean[]) => {
        var flag = true
        temp.forEach((value) => {
            if (!value) {
                flag = false
            }
        })
        props.setIsDone(flag)
        console.log("Flag: " + flag)
        console.log(temp.toString())
    }
    const hardReset = () => {
        const temp: boolean[] = []
        toggled.forEach(() => {
            const r = Math.round(Math.random()) == 0 ? true : false
            temp.push(r)
        })
        setToggled(temp)
    }
    const softReset = () => {
        const temp: boolean[] = []
        toggled.forEach((value) => {
            temp.push(value)
        })
        const r = randomize()
        temp[r] = !temp[r]
        setToggled(temp)
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
                <div className='cont'>
                    {tiles}
                </div>
            </div>

        </>)
}
export default Tile