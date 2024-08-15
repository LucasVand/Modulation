import { useState } from "react"

export class ModuleData {
    hardreset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    softreset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    isDone: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    moduleNumber: number
    displayModuleNumber: number
    constructor(moduleNum: number, displayNum: number) {
        this.moduleNumber = moduleNum
        this.isDone = useState(false)
        this.softreset = useState(false)
        this.hardreset = useState(false)
        this.displayModuleNumber = displayNum
    }
}


export const modulesNotDone = (data: ModuleData[]) => {
    var count = 0
    data.map((value) => {
        if (!value.isDone[0]) {
            count++
        }
    })
    return count
}

export const modulesDone = (data: ModuleData[]) => {
    var count = 0
    data.map((value) => {
        if (value.isDone[0]) {
            count++
        }
    })
    return count
}