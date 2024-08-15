import { useState } from "react"
import ModuleView from "../ModuleView/ModuleView"


function ModuleTesting() {

    const number = 0
    const softReset = useState(false)
    const hardReset = useState(false)
    const isDone = useState(false)
    return (
        <>
            <ModuleView isDone={isDone} hardReset={hardReset} softReset={softReset} keyModuleNumber={0} displayModuleNumber={number}></ModuleView>

            <button onClick={() => { softReset[1]((value) => !value) }}>Soft Reset</button>
            <button onClick={() => { hardReset[1]((value) => !value) }}>Hard Reset</button>

            <div>{"Done: " + isDone[0]}</div>
        </>
    )

    // return (
    //     <>
    //     <div>This is Working</div>
    //     </>
    // )
}

export default ModuleTesting