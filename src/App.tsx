

import React, { useEffect, useState } from 'react'


import ModuleView from './ModuleView/ModuleView'
import SideBar from './MiscFiles/SideBar/SideBar'
import { randomNumber } from './MiscFiles/RandomGenerator'

interface ModuleObj {
  hardreset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  softreset: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  isDone: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  moduleNumber: number
}

function App() {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const moduleData = numbers.map((num: number) => {
    const moduleData: ModuleObj = {
      hardreset: useState(false),
      softreset: useState(false),
      isDone: useState(false),
      moduleNumber: num

    }
    return (
      moduleData
    )
  })

  const progress = useState(0.0)
  const time = useState(0)
  const addNumber = useState(0)


  const randomizeModule = () => {
    const rnd = randomNumber(0, numbers.length - 1)
    moduleData[rnd].softreset[1](true)

  }
  useEffect(() => {

    const intervalSlow = setInterval(() => {
      updateModules()
      gameLogic()

    }, 1000)

    return () => {
      clearInterval(intervalSlow)
    };
  }, []);

  var moduleCount = 0
  const updateModules = () => {
    time[1]((value) => value + 1)

    moduleCount++
    if (moduleCount > 10) {
      moduleCount = 0
      randomizeModule()
    }

    if (randomNumber(0, 10) == 1) {
      moduleCount = 0
      randomizeModule()
    }

  }


  const gameLogic = () => {
    var unsolvedAmountAddition = 0.003
    var solvedAmountSubtraction = 0.001
    var addAmount = 0
    moduleData.forEach((value) => {
      if (!value.isDone[0]) {
        addAmount += unsolvedAmountAddition
      }
      else {
        addAmount -= solvedAmountSubtraction
      }

    })
    progress[1]((value) => {
      var newValue = addAmount + value
      if (newValue > 1) {
        newValue = 1
      }
      return newValue
    })

    addNumber[1](addAmount)
  }


  const modules = numbers.map((num: number) => {
    return (
      <ModuleView key={"module" + num} moduleNumber={num} isDone={moduleData[num].isDone} hardReset={moduleData[num].hardreset} softReset={moduleData[num].softreset}></ModuleView>
    )
  })

  return (
    <>
      <div className='mainCont'>
        <div className='sidebar'>
          <SideBar time={time[0]} progress={progress[0]}></SideBar>
          {addNumber[0]}
        </div>
        <div className='z'>
          {modules}
        </div>
      </div>

    </>
  )
}

export default App

//width: 1350px;
//height: 600px;