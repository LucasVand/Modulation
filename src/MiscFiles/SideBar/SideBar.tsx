import './SideBar.css'

interface SideBarProps {
    time: number
    progress: number
}
function SideBar(props: SideBarProps) {
    const formatTime = (): String => {
        var output = ''
        var minutes = 0
        var time = props.time
        while (time > 60) {
            time -= 60
            minutes += 1
        }
        if (minutes < 10) {
            output += "0"
        }
        output += minutes + ":"

        if (time < 10) {
            output += "0"
        }
        output += time

        return output
    }
    const computeProgressTop = (): number => {
        var value = 100 - props.progress * 100
        if (value < 0) {
            value = 0
        }
        if (value > 97) {
            value = 97
        }
        return value
    }
    const computeProgressHeight = (): number => {
        var value = props.progress * 100
        if (value > 100) {
            value = 100
        }
        if (value < 3) {
            value = 3
        }
        return value
    }


    return (
        <>
            <div className='timeDisplay'>{formatTime()}</div>
            <div className='progressBarBG'>
                <div className='progressBar' style={{ height: `${computeProgressHeight()}%`, top: `${computeProgressTop()}%` }}></div>
            </div>
        </>
    )
}

export default SideBar