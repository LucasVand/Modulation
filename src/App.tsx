

import { useEffect, useState } from 'react'


import ModuleView from './ModuleView/ModuleView'
import SideBar from './MiscFiles/SideBar/SideBar'
import { randomNumber } from './MiscFiles/RandomGenerator'
import { ModuleData, modulesNotDone } from './MiscFiles/MiscFuncs'


function App() {
  //const numberOfModules = 9


  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const moduleNumbersArrCreator = () => {
    const temp: number[] = []

    for (let i = 0; i < numbers.length; i++) {
      temp.push(randomNumber(1, 9))
    }
    return temp
  }

  var moduleData = numbers.map((value) => {
    const arr = moduleNumbersArrCreator()
    var m: ModuleData = new ModuleData(value, arr[value])
    return m
  })

  const progress = useState(0.0)
  const time = useState(0)

  const progressBarGracePeriodCounter = useState(0)


  const moduleRandomizationCounter = useState(0)
  const moduleRandomizationMaxCount = useState(30)


  useEffect(() => {

    const intervalFast = setInterval(() => {

      time[1]((value) => value + 0.2)
      progressBarGracePeriodCounter[1]((value) => value + 0.2)

      if (progressBarGracePeriodCounter[0] > 10) {
        gameLogic()
      }

    }, 200)

    return () => {
      clearInterval(intervalFast)
    };
  }, [moduleData]);


  const randomizeModule = () => {

    const rnd = randomNumber(0, moduleData.length - 1)
    moduleData[rnd].softreset[1]((value) => !value)
  }


  const getAddAmount = () => {
    const unsolvedAmountAddition = 0.00006
    const solvedAmountSubtraction = 0.0003
    var addAmount = 0.001

    addAmount = Math.pow(modulesNotDone(moduleData), 2) * unsolvedAmountAddition + 0.002

    if (modulesNotDone(moduleData) == 0) {
      addAmount = -solvedAmountSubtraction
    }
    return addAmount
  }

  const updateModules = () => {

    moduleRandomizationCounter[1]((value) => value + 1)
    if (moduleRandomizationCounter[0] > moduleRandomizationMaxCount[0]) {
      moduleRandomizationCounter[1](0)
      moduleRandomizationMaxCount[1]((value) => value - 1 > 10 ? value - 1 : 10)
      randomizeModule()
    }

    if (randomNumber(0, 30) == 1) {

      randomizeModule()
    }
  }


  const gameLogic = () => {

    progress[1]((value) => {
      var newValue = getAddAmount() + value
      if (newValue > 1) {
        newValue = 1
      }
      return newValue
    })


    updateModules()
  }


  const modules = moduleData.map((_, num: number) => {
    return (
      <ModuleView key={"module" + num} displayModuleNumber={moduleData[num].displayModuleNumber} keyModuleNumber={num} isDone={moduleData[num].isDone} hardReset={moduleData[num].hardreset} softReset={moduleData[num].softreset}></ModuleView>
    )
  })

  return (
    <>
      <div className='mainCont'>
        <div className='sidebar'>
          <SideBar time={Math.floor(time[0])} progress={progress[0]} moduleData={moduleData}></SideBar>



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