
import './Tile.css'
import { useState } from 'react'

interface moduleProp {
    isDone: boolean
    setIsDone: React.Dispatch<React.SetStateAction<boolean>>

}

function Tile(props: moduleProp) {
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