

import React, { useState } from 'react'


import ModuleView from './ModuleView/ModuleView'

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


  const modules = numbers.map((num: number) => {
    return (
      <ModuleView key={"module" + num} moduleNumber={num} isDone={moduleData[num].isDone} hardReset={moduleData[num].hardreset} softReset={moduleData[num].softreset}></ModuleView>
    )
  })

  return (
    <>
      <div className='mainCont'>
        <div className='sidebar'> </div>
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